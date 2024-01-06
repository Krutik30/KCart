import { Module } from "@nestjs/common";
import { databaseProviders } from "./database.provider";

@Module({
    // @ts-expect-error type provider is not match
    providers: [...databaseProviders],
    // @ts-expect-error same as above
    exports: [...databaseProviders]
})
export class DatabaseModule {};