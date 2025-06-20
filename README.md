# Playwright Test Project

## Prerequisites

- Node.js 16 or higher
- npm or yarn
- Supported browsers (Chrome, Firefox, or Safari)


## Project Structure

```
playwright-test-project/
├── tests/                 # Test files directory
├── package.json          # Project dependencies and scripts
├── run_tests.sh          # Linux/macOS test runner
├── run_tests.bat         # Windows test runner
└── README.md            # Project documentation
```
├── playwright.config.ts  # Playwright configuration
├── .gitignore           # Git ignore rules
└── test-results/        # Test execution results


## CI/CD Integration

This project includes both GitHub Actions and GitLab CI/CD configurations for automated testing:

### GitHub Actions
- Configured in `.github/workflows/tests.yml`
- Runs on push to main/master branches
- Runs on pull requests
- Includes test reporting and artifacts
- Configurable for different environments

### GitLab CI/CD
- Configured in `.gitlab-ci.yml`
- Multi-stage pipeline with test and report stages
- Caching for dependencies
- Artifact management
- GitLab Pages integration for test reports
- Optimized for the selected framework

See the respective configuration files for complete details.


## Running Tests

Two scripts are provided to run the tests:
- `run_tests.sh` for Linux/macOS
- `run_tests.bat` for Windows

### On Linux/macOS:

1. Open a terminal in the project directory
2. Make the script executable:
   ```bash
   chmod +x run_tests.sh
   ```
3 3. Run the script:
   ```bash
   ./run_tests.sh
   ```

### On Windows:

1. Open Command Prompt or PowerShell in the project directory
2. Run the script:
   ```bash
   run_tests.bat
   ```

### Troubleshooting

If you encounter any issues:

1. **Permission Denied (Linux/macOS)**
   ```bash
   sudo chmod +x run_tests.sh
   ```

2. **Windows Security Warning**
   - Right-click the .bat file
   - Select "Properties"
   - Check "Unblock"
   - Click "Apply" and "OK"

3. **Command Not Found**
   - Verify Node.js/Python installation
   - Check system PATH
   - Restart terminal

4. **Dependencies Issues**
   - Clear package manager cache
   - Remove and reinstall dependencies
   - Check for version conflicts

5. **Browser Driver Issues**
   - Update browser to latest version
   - Clear browser cache
   - Run with admin/sudo privileges

## Documentation

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)