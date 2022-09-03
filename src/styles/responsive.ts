interface Iresponsive {
    responsive: {
      small: {
        width: {
          value: number;
          unit: string;
        };
      };
      medium: {
        width: {
          value: number;
          unit: string;
        };
      };
      large: {
        width: {
          value: number;
          unit: string;
        };
      };
    };
    breakpoints: {
      mobile: string;
    };
  }
  
  const globalBreakpoints = {
    responsive: {
      small: {
        width: {
          value: 720,
          unit: "px",
        },
      },
      medium: {
        width: {
          value: 1024,
          unit: "px",
        },
      },
      large: {
        width: {
          value: 2048,
          unit: "px",
        },
      },
    },
    breakpoints: {
      mobile: "720px",
    },
  } as Iresponsive;
  
  Object.freeze(globalBreakpoints);
  
  export default globalBreakpoints;