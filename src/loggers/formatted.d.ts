import LoggerFactory = require("../logger-factory");

import BaseLogger = require("./base");
import type { LoggerOptions } from "./base";

declare namespace FormattedLogger {

	export type FormatterFunction = (obj: any) => string;

	export interface FormattedLoggerOptions extends LoggerOptions {
		colors?: boolean,
		moduleColors?: boolean|string[],
		formatter?: FormatterFunction|"json"|"jsonext"|"simple"|"short"|"full",
		objectPrinter?: (obj: any) => string,
		autoPadding?: boolean
	}
}

declare class FormattedLogger extends BaseLogger {
	constructor(opts?: FormattedLogger.FormattedLoggerOptions);

	opts: FormattedLogger.FormattedLoggerOptions;

	init(loggerFactory: LoggerFactory): void;
	getLogHandler(bindings: LoggerFactory.LoggerBindings): BaseLogger.LogHandler | null;
}

export = FormattedLogger;