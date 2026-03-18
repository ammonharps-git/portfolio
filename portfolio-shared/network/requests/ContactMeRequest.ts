// TODO: add ipAddress support for logging?
export interface ContactMeReqeust {
    readonly email: string,
    readonly name : string | null,
    readonly message : string | null,
    readonly capchaToken : string,
}