export interface ITextStyle {
  fontStyle: 'normal' | 'italic' | 'oblique';
  fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  textAlign:
    | 'center'
    | 'left'
    | 'right'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'end'
    | 'justify'
    | 'match-parent'
    | 'start';
  textDecoration: 'underline' | 'line-through' | 'overline';
}
