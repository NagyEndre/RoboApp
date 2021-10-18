export class Lexer {
  static lex(program: string) {
    return program.toUpperCase().split(/\s+/)
  }
}
