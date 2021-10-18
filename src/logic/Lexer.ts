export class Lexer {
  static lex(program: string) {
    return program.trim().split(/\s+/)
  }
}
