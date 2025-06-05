# Sign-up Form

This project is a solution to the [Sign-up Form assignment](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form) from [The Odin Project](https://www.theodinproject.com/). It demonstrates intermediate HTML, CSS, and JavaScript skills by building a visually appealing and interactive sign-up form for an imaginary service.

## Features

- **Custom Layout:** Two-column design with a sidebar featuring a background image, Odin logo, and custom Norse Bold font for the logo.
- **Form Validation:**
  - HTML5 validation for required fields, email, phone, and password patterns.
  - Real-time error messages for invalid input and password mismatch.
  - Prevents form submission if passwords do not match.
- **Styling:**
  - Modern, accessible, and semantic HTML structure.
  - Clean, organized CSS with a custom reset and responsive font sizes.
  - Styled form inputs with focus, error, and invalid state styles.
  - Button and link styles matching the assignment design.
- **Assets:**
  - Background image, Odin logo, and Norse Bold font included in the `assets/` folder.

## Live Preview

![Form Design Preview](assets/desktop_preview.png)

## Usage

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd sign-up-form
   ```
2. **Open `index.html` in your browser.**

No build steps or dependencies are required.

## File Structure

- `index.html` – Main HTML file with the form and layout.
- `styles.css` – All styles, including layout, fonts, and form validation states.
- `script.js` – Handles real-time validation and password matching.
- `assets/` – Contains images and fonts used in the project.

## Form Details

- **Fields:** First Name, Last Name, Email, Phone Number, Password, Confirm Password
- **Validation:**
  - First/Last Name: At least 2 characters
  - Email: Must be a valid email address
  - Phone: Optional, format `xxxx-xxxxxxx`
  - Password: At least 8 characters
  - Confirm Password: Must match Password
- **Error Handling:**
  - Error messages shown for invalid fields and password mismatch
  - Passwords must match to submit the form

## Assets & Credits

- **Background Image:** [Unsplash - Halie West](https://unsplash.com/photos/25xggax4bSA)
- **Logo Font:** [Norse Bold](https://cdn.statically.io/gh/TheOdinProject/theodinproject/efdc2888072f409e687d31dc580595dbe4fe0ff4/app/assets/fonts/Norse-Bold.otf)
- **Odin Logo:** [The Odin Project](https://www.theodinproject.com/)

For more details, see the [assignment page](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form).

## License

This project is for educational purposes as part of The Odin Project curriculum.