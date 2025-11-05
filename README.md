# VS Code Themed Portfolio

A modern, interactive portfolio website that mimics the Visual Studio Code interface. This portfolio showcases your skills, projects, and contact information in a unique and developer-friendly way.

## Features

- **VS Code Interface**: Complete with activity bar, sidebar, tabs, and editor area
- **Interactive Elements**: Tab switching, file navigation, and typing animation
- **Responsive Design**: Works on desktop and mobile devices
- **Syntax Highlighting**: Code-like presentation of your information
- **Customizable Content**: Easily update your personal information

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Customize the content to match your personal information

## Customization

### Personal Information

Edit the JavaScript objects in the HTML file to update your information:

- **About**: Update the `profile` object in the about section
- **Projects**: Add or modify projects in the `projects` array
- **Skills**: Adjust your skills and proficiency levels in the `skills` object
- **Contact**: Update your contact information in the `contact` object

### Theme Customization

You can customize the VS Code theme colors by modifying the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    --bg-color: #1e1e1e;
    --sidebar-bg: #252526;
    /* other color variables */
}
```

To switch to a light theme, you can replace these colors with lighter variants.

### Adding New Sections

To add a new section:

1. Add a new file in the sidebar folder structure in `index.html`
2. Create a new tab in the tabs section
3. Add a new code section in the editor content area
4. Update the JavaScript to handle the new section

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome Icons
- Google Fonts (Fira Code)

## Browser Compatibility

This portfolio works best in modern browsers:
- Chrome
- Firefox
- Edge
- Safari

## License

Feel free to use this template for your personal portfolio.

## Credits

Created with ❤️ by [Your Name]
