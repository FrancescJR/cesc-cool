extern crate csv;

use std::error::Error;
use std::process;
use std::ffi::OsString;
use std::fs::File;
use std::io::prelude::*;
use std::env;

fn main() {
    if let Err(err) = run() {
        println!("{}", err);
        process::exit(1);
    }
}

fn run() -> Result<(), Box<dyn Error>> {
    let file_path = get_first_arg()?;
    let result_file_path = get_second_arg()?;
    let mut rdr = csv::ReaderBuilder::new()
        .has_headers(false)
        .from_path(file_path)?;
    let merged = merge_lines(rdr.records());
    // for notes in merged {
    //     println!("{:?}", notes);
    // }
    if let Err(err) = write_merged_notes(merged, result_file_path) {
        println!("{}", err);
        process::exit(1);
    }
    Ok(())
}

fn get_first_arg() -> Result<OsString, Box<dyn Error>> {
    match env::args_os().nth(1) {
        None => Err(From::from("expected 1 argument, but got none")),
        Some(file_path) => Ok(file_path),
    }
}

fn get_second_arg() -> Result<OsString, Box<dyn Error>> {
    match env::args_os().nth(2) {
        None => Err(From::from("expected 2 argument, but got none")),
        Some(file_path) => Ok(file_path),
    }
}

// usign ifnra infra infra... returning infra.
fn merge_lines<R: std::io::Read>(csv_iterator: csv::StringRecordsIter<R>)->Vec<csv::StringRecord>
{
    let mut merged_csv = vec![];
    for string_record in csv_iterator {
        let line = string_record.unwrap_or_else(|error| {
            panic!("No Result on line. Error: {:?}", error);
        });

        let real_first = line.get(0).unwrap_or_else(|| {
            panic!("No position on 0. ");
        });

        if real_first.contains("Highlight (Yellow)") {
            merged_csv.push(line.clone());
        } else {
            let index = merged_csv.len()-1;
            let mut last_line = merged_csv[index].clone();
            for field in line.iter() {
                last_line.push_field(field);
            }
            merged_csv[index] = last_line;
        }
    }
    merged_csv
}

fn write_merged_notes(notes: Vec<csv::StringRecord>, filename: OsString) -> std::io::Result<()>{
    let mut result_file = File::create(filename)?;
    result_file.write_all(b"export const BOOK_DDD_IN_PHP:  NoteScaffolding[] =\n")?;
    result_file.write_all(b"    [\n")?;
    for result in notes {
        let byte_record = result.into_byte_record();
        result_file.write_all(b"        {\n")?;
        result_file.write_all(b"             \"context\": \"")?;
        result_file.write_all(byte_record.get(1).unwrap())?; result_file.write_all(b"\",\n")?;
        result_file.write_all(b"             \"quote\": \"")?;
        result_file.write_all(byte_record.get(3).unwrap())?; result_file.write_all(b"\",\n")?;
        result_file.write_all(b"             \"personal_note\": \"")?;
        match byte_record.get(7) {
            Some(byte_string) => {
                result_file.write_all(byte_string)?;
            },
            None => {
                result_file.write_all(b" no personal note, only highlight.")?;
            }
        }
        result_file.write_all(b"\",\n")?;
        result_file.write_all(b"        },\n")?;
    }
    result_file.write_all(b"    ]\n")?;
    Ok(())
}