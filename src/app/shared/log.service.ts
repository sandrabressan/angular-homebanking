import { Injectable } from '@angular/core';
import { LogPublisher } from "./log-publisher";
import { LogPublishersService } from "./log-publishers.service";

export enum LogLevel {
    All = 0,
    Debug = 1,
    Info = 2,
    Warn = 3,
    Error = 4,
    Fatal = 5,
    Off = 6
}

@Injectable()
export class LogService {
    level: LogLevel = LogLevel.All;
    logWithDate: boolean = true;
    publishers: LogPublisher[];

    constructor(private publishersService: LogPublishersService) {
        // Inicializa publishers
        this.publishers = this.publishersService.publishers;
    }

    debug(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Debug, optionalParams);
    }
    
    info(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Info, optionalParams);
    }
    
    warn(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Warn, optionalParams);
    }
    
    error(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Error, optionalParams);
    }
    
    fatal(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Fatal, optionalParams);
    }
    
    log(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.All, optionalParams);
    }

    private writeToLog(msg: string, level: LogLevel, params: any[]) {
        if (this.shouldLog(level)) {
            let entry: LogEntry = new LogEntry();
            entry.message = msg;
            entry.level = level;
            entry.extraInfo = params;
            entry.logWithDate = this.logWithDate;
            for (let logger of this.publishers) { // itera sobre array de publishers
                logger.log(entry).subscribe(response => {});
            }
        }
    }

    private shouldLog(level: LogLevel): boolean {
        let ret: boolean = false;
        if ((level >= this.level && level !== LogLevel.Off) || this.level === LogLevel.All) {
            ret = true;
        }
        return ret;
    }

}

export class LogEntry {
    entryDate: Date = new Date();
    message: string = "";
    level: LogLevel = LogLevel.Debug;
    extraInfo: any[] = [];
    logWithDate: boolean = true;
    
    buildLogString(): string {
        let ret: string = "";
        
        if (this.logWithDate) {
            ret = new Date() + " - ";
        }
        
        ret += "Tipo: " + LogLevel[this.level];
        ret += " - Mensagem: " + this.message;
        if (this.extraInfo.length) {
            ret += " - Informações adicionais: " + this.formatParams(this.extraInfo);
        }
        
        return ret;
    }
    
    private formatParams(params: any[]): string {
        let ret: string = params.join(",");
        
        // Confere se existe pelo menos um objeto no array
        if (params.some(p => typeof p == "object")) {
            ret = "";
            
            // Constroi string separada com vírgula
            for (let item of params) {
                ret += JSON.stringify(item) + ",";
            }
        }
        
        return ret;
    }
}

