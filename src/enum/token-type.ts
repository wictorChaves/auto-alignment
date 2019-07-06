export enum TokenType {
    Invalid
    , Word
    , Assignment      // = += -= *= /=
    , Arrow           // =>
    , Block           // {} [] ()
    , PartialBlock    // { [ (
    , EndOfBlock      // } ] )
    , String
    , PartialString
    , Comment
    , Whitespace
    , Colon
    , From
    , Comma
    , CommaAsWord
    , Insertion
}