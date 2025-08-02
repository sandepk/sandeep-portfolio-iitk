# LinkedIn Profile Image Setup Guide

## How to Get Your LinkedIn Profile Image URL

1. **Go to your LinkedIn profile**: https://www.linkedin.com/in/sandeep-gupta-0702661a1/

2. **Right-click on your profile picture** and select "Open image in new tab" or "Copy image address"

3. **Copy the image URL** - it should look something like:
   ```
   https://media.licdn.com/dms/image/C4D03AQHqQqQqQqQqQq/profile-displayphoto-shrink_800_800/0/1703123456789?e=1721865600&v=beta&t=actual-image-id
   ```

## Update the Hero Component

Once you have your LinkedIn profile image URL, replace the placeholder URL in `src/components/Hero.tsx`:

```typescript
// Find this line in the Hero component (around line 60):
src="https://media.licdn.com/dms/image/C4D03AQHqQqQqQqQqQq/profile-displayphoto-shrink_800_800/0/1703123456789?e=1721865600&v=beta&t=your-actual-linkedin-image-id"

// Replace it with your actual LinkedIn profile image URL:
src="YOUR_ACTUAL_LINKEDIN_IMAGE_URL_HERE"
```

## Alternative Method

If you can't get the direct URL, you can also:

1. **Download your LinkedIn profile picture** to your computer
2. **Save it as `profile-image.jpg`** in the `public` folder
3. **Keep the original code** that uses `/profile-image.jpg`

## Notes

- The LinkedIn image URL will automatically update your profile image in the Hero section
- The image will be displayed in a circular format with a beautiful border and shadow
- If the LinkedIn URL doesn't work, it will fall back to a placeholder image
- Make sure the image is high quality (at least 400x400 pixels) for the best display

## Testing

After updating the URL, refresh your portfolio page to see your LinkedIn profile image displayed in the Hero section! 