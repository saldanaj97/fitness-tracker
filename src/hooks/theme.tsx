import { DarkModeColors, LightModeColors } from '../themeColors'

const useThemeStyles = (isDarkMode: boolean) => {
  const backgroundStyle = {
    backgroundColor: isDarkMode ? DarkModeColors.primary : LightModeColors.primary,
    margin: 10,
  }

  const textStyle = {
    color: isDarkMode ? DarkModeColors.primaryFont : LightModeColors.primaryFont,
  }

  const viewStyle = {
    ...backgroundStyle,
    ...textStyle,
  }

  return { backgroundStyle, textStyle, viewStyle }
}

export default useThemeStyles
