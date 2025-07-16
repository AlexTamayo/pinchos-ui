import { eras } from '@/styles/fonts';
import { DEFAULT_TRANSITION_TIME_NUM } from "./constants";

const createTheme = () => {

  // Base colors
  const createPrimaryColors = (opacity: number = 1) => ({
    light: `rgba(204, 0, 0, ${opacity})` as string,
    dark: `rgba(182, 47, 47, ${opacity})` as string
  });

  const primaryRed = createPrimaryColors();

  const primaryRedLight = {
    light: 'rgb(243, 168, 168)' as string,
    dark: 'rgb(243, 41, 41)' as string
  };

  // Create secondary colors with opacity function
  const createSecondaryColors = (opacity: number = 1) => ({
    light: `rgba(238, 238, 238, ${opacity})` as string,
    dark: `rgba(34, 34, 34, ${opacity})` as string
  });

  const secondary = createSecondaryColors();

  const createMonochromeColors = (opacity: number = 1) => ({
    light: `rgba(255, 255, 255, ${opacity})` as string,
    dark: `rgba(0, 0, 0, ${opacity})` as string
  })

  const monochrome = createMonochromeColors();

  const createButtonBoxShadow = (opactiy: number) => {
    return `2px 4px 8px rgba(0, 0, 0, ${opactiy})`
  }

  const focusOutlineColor = 'rgba(30, 139, 255, 0.75)';

  const labelTextColor = {
    light: 'rgb(50, 50, 50)' as string,
    dark: 'rgb(220, 220, 220)' as string,
  };
  
  const redOnRedHoverColor = {
    light: 'rgb(240, 0, 0)' as string,
    dark: 'rgb(234, 50, 50)' as string,
  }

  const errorRed = 'rgb(255, 0, 0)';


  return {
    colors: {
      primaryRed,
      primaryRedLight,
      primaryRedSemi08:  createPrimaryColors(0.8),
      primaryRedSemi05:  createPrimaryColors(0.5),
      primaryRedSemi02:  createPrimaryColors(0.2),
      primaryRedSemi01:  createPrimaryColors(0.1),
      primaryRedSemi005: createPrimaryColors(0.05),
      primaryRedSemi001: createPrimaryColors(0.01),
      secondary,
      secondarySemi08:  createSecondaryColors(0.8),
      secondarySemi05:  createSecondaryColors(0.5),
      secondarySemi02:  createSecondaryColors(0.2),
      secondarySemi01:  createSecondaryColors(0.1),
      secondarySemi005: createSecondaryColors(0.05),
      secondarySemi001: createSecondaryColors(0.01),
      monochrome,
      monochromeSemi09:  createMonochromeColors(0.9),
      monochromeSemi08:  createMonochromeColors(0.8),
      monochromeSemi07:  createMonochromeColors(0.7),
      monochromeSemi06:  createMonochromeColors(0.6),
      monochromeSemi05:  createMonochromeColors(0.5),
      monochromeSemi02:  createMonochromeColors(0.2),
      monochromeSemi01:  createMonochromeColors(0.1),
      monochromeSemi005: createMonochromeColors(0.05),
      monochromeSemi001: createMonochromeColors(0.01),
      focusOutlineColor,
      redOnRedHoverColor,
      errorRed,
      glassWithShadow: {
        backdropFilter: 'blur(6px)' as string,
        boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.08)' as string,
        borderWidth: '1px' as string,
        borderStyle: 'solid' as string,
        borderColor: monochrome,
      },
      opposite: {
        light: monochrome.dark as string,
        dark: '#999' as string
      },
      linkButton: {
        border: primaryRed,
        shine: {
          colorLight: "#F97575" as string,
          colorDark: "#FF3D3D" as string
        }
      },
      selectionBackgroundColor: createPrimaryColors(0.5),
      themeToggle: {
        coloured: {
          top: {
            light: 'hsl(213, 40%, 55%)' as string,
            dark : 'hsl(219, 25%, 10%)' as string
          },
          mid: {
            light: 'hsl(198, 30%, 75%)' as string,
            dark : 'hsl(207, 25%, 20%)' as string
          },
          bottom: {
            light: 'hsl(200, 30%, 90%)' as string,
            dark : 'hsl(212, 25%, 30%)' as string
          },
        },
        greyscale: {
          top: {
            light: 'hsl(213, 0%, 55%)' as string,
            dark : 'hsl(219, 0%, 10%)' as string
          },
          mid: {
            light: 'hsl(198, 0%, 75%)' as string,
            dark : 'hsl(207, 0%, 20%)' as string
          },
          bottom: {
            light: 'hsl(200, 0%, 90%)' as string,
            dark : 'hsl(212, 0%, 30%)' as string
          },

        },
      },
      gradients: {
        red: {
          light: {
            start: primaryRedLight.light as string,
            middle: primaryRed.light as string,
            end: '#640000' as string
          },
          dark: {
            start: primaryRedLight.dark as string,
            middle: '#790000' as string,
            end: '#360000' as string
          }
        },
        background: {
          light: {
            start: '#DDD' as string,
            end: secondary.light as string
          },
          dark: {
            start: '#333333' as string,
            end: secondary.dark as string
          }
        }
      },
      particles: primaryRedLight,
      accent: {
        light: '' as string,
        dark: '' as string
      },
      text: {
        primary: {
          light: secondary.dark,
          dark: secondary.light
        },
        secondary: {
          light: '' as string,
          dark: '' as string
        },
        accent: {
          light: '' as string,
          dark: '' as string
        },
      },
      message: {
        text: {
          light: 'rgb(255, 255, 255)' as string,
          dark: 'rgb(186, 186, 186)' as string
        },
        shadow: '0px 0px 3px rgba(0, 0, 0, 0.6)' as string,
      }
    },
    spacing: {
      xxs: 2 as number,
      xs: 4 as number,
      sm: 8 as number,
      md: 10 as number,
      lg: 20 as number,
      xl: 30 as number,
      xxl: 50 as number
    },
    typography: {
      fontSize: {
        small: '14px' as string,
        body: '16px' as string,
        h3: '20px' as string,
        h2: '24px' as string,
        h1: '32px' as string
      },
      fontWeight: {
        normal: 0 as number,
        medium: 0 as number,
        bold: 0 as number
      }
    },
    layout: {
      borderRadius: {
        none: 0 as number,
        xs: 20 as number,
        sm: 25 as number,
        normal: 30 as number,
        lg: 35 as number,
        round: 100 as number
      }
    },
    components: {
      navBar: {
        mobile: {
          height: 70,
        },
      },
      footer: {
        mobile: {
          height: 55,
        },
      },
      linkButton: {
        borderColor: primaryRed,
        shineColorLight: "#F97575" as string,
        shineColorDark: "#FF3D3D" as string,
        shineTime: "8s" as string,
        shineWidth: "50%" as string,
        shineSpread: 100 as number,
        overlayBgColor: {
          light: 'rgba(50, 50, 50, 0.30)' as string,
          dark: 'rgba(30, 30, 30, 0.60)' as string
        },
        overlayHoverBgColor: {
          light: 'rgba(0, 0, 0, 0.45)' as string,
          dark: 'rgba(0, 0, 0, 0.80)' as string
        },
        // overlayBlur: '1px' as string,
        // overlayHoverBlur: "15px" as string,
        overlaySaturation: {
          light: 1.1 as number,
          dark: 1.3 as number
        },
        overlayHoverSaturation: {
          light: 1.5 as number,
          dark: 2.0 as number
        },
        overlayHoverTiming: DEFAULT_TRANSITION_TIME_NUM,

        fontColor: {
          light: 'rgba(255, 255, 255, 1)',
          dark: 'rgba(255, 255, 255, 0.75)'
        },
        fontWeight: 700 as number,
        fontFamily: eras.style.fontFamily as string,
        fontHoverScale: "120%" as string,

        fontShadowDistance: "2px" as string,
        fontShadowBlur: "4px" as string,
        fontShadowColor: "rgba(0, 0, 0, 0.4)" as string,

        radius: 30 as number,
      },
      navButton: {
        normal: {
          normal: {
            backgroundColor: createSecondaryColors(0.01),
            borderColor: primaryRed,
            color: primaryRed,
            boxShadow: createButtonBoxShadow(0.2) as string,
          },
          hover: {
            hoverBackgroundColor: {
              light: createPrimaryColors(0.5).light,
              dark: 'rgba(0, 0, 0, 0.5)' as string,
            },
            hoverBorderColor: {
              light: secondary.light,
              dark: primaryRed.light,
            },
            hoverColor: {
              light: secondary.light,
              dark: primaryRed.light,
            },
            hoverBoxShadow: createButtonBoxShadow(0.3) as string,
          }
        },
        active: {
          normal: {
            backgroundColor: {
              light: primaryRed.light,
              dark: 'rgba(0, 0, 0, 1)' as string,
            },
            borderColor: {
              light: secondary.light,
              dark: primaryRed.light,
            },
            color: {
              light: secondary.light,
              dark: primaryRed.light,
            },
            boxShadow: createButtonBoxShadow(0.4) as string,
          },
          hover: {
            hoverBackgroundColor: {
              light: redOnRedHoverColor.light,
              dark: 'rgb(34, 34, 34)' as string,
            },
            hoverBorderColor: {
              light: secondary.light,
              dark: primaryRed.light,
            },
            hoverColor: {
              light: secondary.light,
              dark: primaryRed.light,
            },
            hoverBoxShadow: createButtonBoxShadow(0.5) as string,
          }
        }
      },
      circularLinkButton: {
        iconColor: secondary,
        hoverIconColor: secondary,
        activeIconColor: primaryRed,
        bgColor: primaryRed,
        hoverBackgroundColor: redOnRedHoverColor,
        activeBackgroundColor: secondary,
      },
      contactForm: {
        labelTextColor,
        formBackgroundColor: {
          light: 'rgba(255, 255, 255, 0.6)' as string,
          dark: 'rgba(0, 0, 0, 0.3)' as string,
        },
        focusOutline: {
          focusOutline: `2px dashed ${focusOutlineColor}` as string,
          focusOutlineOffset: 2 as number,
        },
        form: {
          titleColor: labelTextColor,
          descriptionColor: labelTextColor,
        },
        commonFormFieldProps: {
          fullWidth: true,
          labelColor: labelTextColor,
          labelPadding: "0px 8px" as string,
          inputColor: {
            light: 'rgb(40, 40, 40)' as string,
            dark: 'rgb(210, 210, 210)' as string
          },
          inputPadding: 10 as number,
          inputBorder: "none" as string,
          inputSelectionBackgroundColor: createPrimaryColors(0.5),
          inputBackgroundColor: {
            light: 'rgb(255, 255, 255)' as string,
            dark: 'rgb(10, 10, 10)' as string
          },
          inputFontFamily: eras.style.fontFamily,
          placeholderColor: {
            light: 'rgba(0, 0, 0, 0.2)' as string,
            dark: 'rgba(255, 255, 255, 0.17)' as string
          },
          errorBorder: `1.5px solid ${errorRed}` as string,
          errorColor: errorRed,
          errorFontFamily: eras.style.fontFamily,
          errorPadding: "0px 10px" as string,
        },
        button: {
          color: 'white' as string,
          border: 'none' as string,
          borderRadius: 100 as number,
          fontFamily: eras.style.fontFamily,
          backgroundColor: primaryRed,
        }
      },
    },
  } as const;
};

export const theme = createTheme();
export type Theme = typeof theme; 