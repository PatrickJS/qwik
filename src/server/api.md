## API Report File for "@builder.io/qwik"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { FunctionComponent } from '@builder.io/qwik';
import { JSXNode } from '@builder.io/qwik';
import type { OutputEntryMap } from '@builder.io/qwik/optimizer';

// @public
export function createDocument(opts?: DocumentOptions): QwikDocument;

// @public
export function createGlobal(opts?: GlobalOptions): QwikGlobal;

// @public (undocumented)
export interface CreateRenderToStringOptions {
    // (undocumented)
    symbolsPath: string;
}

// @alpha
export function createTimer(): () => number;

// @public
export interface DocumentOptions {
    // (undocumented)
    debug?: boolean;
    // (undocumented)
    url?: URL;
}

// @alpha
export function getImports(filePath: string, readFileFn: (path: string) => Promise<string>): Promise<string[]>;

// @alpha
export function getQwikLoaderScript(opts?: {
    events?: string[];
    debug?: boolean;
}): string;

// @alpha
export function getQwikPrefetchScript(opts?: {
    debug?: boolean;
}): string;

// @public
export interface GlobalOptions extends DocumentOptions {
}

// @public
export interface QwikDocument extends Document {
}

// @public
export interface QwikGlobal extends WindowProxy {
    document: QwikDocument;
    // (undocumented)
    location: Location;
}

// Warning: (ae-forgotten-export) The symbol "QwikLoaderProps" needs to be exported by the entry point index.d.ts
//
// @alpha (undocumented)
export const QwikLoader: FunctionComponent<QwikLoaderProps>;

// Warning: (ae-forgotten-export) The symbol "QwikPrefetchProps" needs to be exported by the entry point index.d.ts
//
// @alpha (undocumented)
export const QwikPrefetch: FunctionComponent<QwikPrefetchProps>;

// @public
export function renderToDocument(doc: Document, rootNode: JSXNode<unknown> | FunctionComponent<any>, opts: RenderToDocumentOptions): Promise<void>;

// Warning: (ae-forgotten-export) The symbol "SerializeDocumentOptions" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export interface RenderToDocumentOptions extends SerializeDocumentOptions, DocumentOptions {
    dehydrate?: boolean;
}

// @public
export function renderToString(rootNode: any, opts: RenderToStringOptions): Promise<RenderToStringResult>;

// @public (undocumented)
export interface RenderToStringOptions extends RenderToDocumentOptions {
}

// @public (undocumented)
export interface RenderToStringResult {
    // (undocumented)
    html: string;
    // (undocumented)
    timing: {
        createDocument: number;
        render: number;
        toString: number;
    };
}

// @public
export function serializeDocument(doc: Document, opts?: SerializeDocumentOptions): string;

// @public
export function setServerPlatform(document: any, opts: DocumentOptions): Promise<void>;

// @alpha (undocumented)
export const versions: {
    readonly qwik: string;
    readonly qwikDom: string;
};

// (No @packageDocumentation comment for this package)

```
