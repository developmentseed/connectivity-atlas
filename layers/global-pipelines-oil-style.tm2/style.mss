#built {
  line-width: 0.5;
  line-join: round;
   ::line {
    line-width: 3;
    line-color: #7B0DFF;
  }
  ::dash {
    line-color: #E80C7A;
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

