#Features {
  ::line {
    line-width: 3;
    line-color: #aaa;
  }
  ::dash {
    line-color: #444;
    line-width: 2.5;
    line-dasharray: 6, 6;
  }
  [zoom < 4] {
     ::line {
    line-width: 1.5;
  }
  ::dash {
    line-width: 1.25;
  }
 }
}


