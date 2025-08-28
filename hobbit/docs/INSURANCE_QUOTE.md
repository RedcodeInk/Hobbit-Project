# Redcode Motor Insurance Quote System
## 27th August, 2025

## Architecture Overview

The motor insurance quote system is designed with a multi-step form approach focusing on user experience and accessibility. 

### Component Structure

1. **QuoteFlow/** - Main container for the quote system
   - `QuoteContainer.jsx` - Manages the overall state and flow
   - `StepIndicator.jsx` - Shows progress through the quote process
   - `NavigationButtons.jsx` - Handles moving between steps

2. **Steps/** - Individual steps of the quote process
   - `VehicleDetails.jsx` - Car information input
   - `DriverDetails.jsx` - Driver's personal information
   - `CoverageOptions.jsx` - Insurance coverage selection
   - `QuoteSummary.jsx` - Final quote review and summary

3. **Common/** - Reusable components
   - `FormInput.jsx` - Accessible form inputs
   - `SelectField.jsx` - Custom select dropdowns
   - `ErrorMessage.jsx` - Standardized error display

### User Flow

1. **Vehicle Information**
   - Car make and model
   - Year of manufacture
   - Registration number
   - Vehicle usage (personal/commercial)

2. **Driver Details**
   - Personal information
   - Driving history
   - Previous claims
   - License information

3. **Coverage Selection**
   - Coverage types
   - Optional add-ons
   - Deductible options

4. **Quote Summary**
   - Price breakdown
   - Selected coverage details
   - Next steps

### Accessibility Features
- ARIA labels and roles
- Keyboard navigation
- Error messaging
- Focus management
- Color contrast compliance

### State Management
- Form data handled with react-hook-form
- Step navigation with local state
- Form validation at each step

### Error Handling
- Field-level validation
- Step-level validation
- API error handling
