import { Observable, of } from 'rxjs';
import { LogEntry } from './log.service';
import CryptoJS from 'crypto-js';

export abstract class LogPublisher {
    location: string;
    abstract log(record: LogEntry):
    Observable<boolean>
    abstract clear(): Observable<boolean>;
}

export class LogConsole extends LogPublisher {
    
    log(entry: LogEntry): Observable<boolean> { // Loga no console
        console.log(entry.buildLogString());
        return of(true);
    }
    
    clear(): Observable<boolean> { // limpa console
        console.clear();
        return of(true);
    }
}

export class LogLocalStorage extends LogPublisher { // Salva logs no local storage do browser
    encryptData = true;
    key = "123456789";
    constructor() {
        super();
        this.location = 'logs'; // Palavra-chave da entrada no local storage
    }

    private encrypt(txt: string): string {
        return CryptoJS.AES.encrypt(txt, this.key).toString();
    }
    
    private decrypt(txtToDecrypt: string) {
        return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
    }
    
    // Anexa nova entrada de log no local storage
    log(entry: LogEntry): Observable<boolean> {
        let ret: boolean = false;
        let values: LogEntry[];
        let oldValues: any;
        
        try {
            if (!this.encryptData) {
                // Recupera logs antigos
                oldValues = localStorage.getItem(this.location)
                values = JSON.parse(oldValues) || [];
                
                // Adiciona nova entrada à lista
                values.push(entry);
                
                // Salva logs no local storage
                localStorage.setItem(this.location, JSON.stringify(values));
            } else {
                // Recupera e descriptografa logs antigos
                let data = localStorage.getItem(this.location) || '';
                if (data) {
                    // console.log('dados criptografados: ', data);
                    // console.log('dados descriptografados: ', this.decrypt(data));
                    values = JSON.parse(this.decrypt(data)) || [];
                
                    // Adiciona nova entrada à lista
                    values.push(entry);

                    // Criptografa e salva logs no local storage
                    localStorage.setItem(this.location, this.encrypt(JSON.stringify(values)));
                } else {
                    values = [];
                    
                    // Adiciona nova entrada à lista
                    values.push(entry);
                    
                    // Salva logs no local storage
                    localStorage.setItem(this.location, this.encrypt(JSON.stringify(values)));
                }
            }
            
            // Retorna true
            ret = true;
        } catch (ex) {
            console.log(ex);
        }
        
        return of(ret);
    }
    
    // Limpa todas as entradas de log do local storage
    clear(): Observable<boolean> {
        localStorage.removeItem(this.location);
        return of(true);
    }
}


