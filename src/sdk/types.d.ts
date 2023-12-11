export type TRichText =
  | {
      text: Array<
        | { heading5: string }
        | { heading6: string }
        | { bold: string }
        | { regular: string }
        | { italic: string }
        | { underline: string }
        | {
            link: { url: string; label?: string; target?: '_blank' | '_self' | '_parent' | '_top' };
          }
        | 'line_break'
      >;
    }
  | { unordered_list: string[] }
  | 'line_break';
