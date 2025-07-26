import { Context } from "koishi";

declare module "koishi" {
    interface Tables {
        coin: CoinModel;
        coin_source_record: CoinSourceRecord;
    }
}

export interface CoinModel {
    user: string;
    coin: number;
}

export interface CoinSourceRecord {
    id: number;
    user: CoinModel["user"];
    coin: number;
    source: string;
    date: Date;
}
