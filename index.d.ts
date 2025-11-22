/// <reference types="node" />

import { Stream } from 'stream';

interface Options {
    /**
     * Whether to parse dynamic values.
     * @default false
     */
    dynamicTyping?: boolean;

    /**
     * The separator used in the CSV.
     * @default ','
     */
    separator?: string;

    /**
     * Whether the CSV has a header row.
     * @default true
     */
    headers?: boolean | string[];

    /**
     * Number of lines to skip at the beginning of the CSV.
     * @default 0
     */
    skipLines?: number;

    /**
     * The character used to quote fields.
     * @default '"'
     */
    quote?: string;

    /**
     * The desired output mode.
     * @default 'json'
     */
    outputMode?: 'json' | 'ndjson';

    /**
     * An array of field names to include in the output.
     */
    fields?: string[];
}

type Callback = (error: Error | null, data?: any[]) => void;

/**
 * Converts CSV to JSON.
 * @param filePath - The path to the CSV file.
 * @param options - The options for CSV to JSON conversion.
 * @param callback - Callback function to handle the JSON data.
 */
declare function csv2json(filePath: string, options?: Options, callback?: Callback): Stream;

export = csv2json;
