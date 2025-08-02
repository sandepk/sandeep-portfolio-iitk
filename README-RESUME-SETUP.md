# Adding Your Resume

Your portfolio now includes a functional resume download feature! Here's how to set it up:

## 📄 **Resume Setup Instructions**

### **1. Prepare Your Resume**
- **Format**: PDF (recommended) or DOCX
- **File size**: Keep under 5MB for fast loading
- **Content**: Include your latest experience, skills, and achievements

### **2. Upload Your Resume**

**Option A: Replace the placeholder file**
```bash
# Replace the placeholder resume with your actual resume
cp /path/to/your/resume.pdf public/resume.pdf
```

**Option B: Use a different filename**
If you prefer a different filename, update the Hero component:
```typescript
// In src/components/Hero.tsx, line ~25
link.href = '/your-resume-filename.pdf';
link.download = 'Sandeep_K_Gupta_Resume.pdf';
```

### **3. Supported File Formats**
- **PDF** (recommended) - `resume.pdf`
- **DOCX** - `resume.docx`
- **DOC** - `resume.doc`

### **4. Resume Content Recommendations**

**Essential Sections:**
- **Contact Information** (name, email, phone, location)
- **Professional Summary** (2-3 sentences)
- **Work Experience** (most recent first)
- **Education** (IIT Kanpur - Engineering)
- **Technical Skills** (React, TypeScript, Node.js, Docker, etc.)
- **Projects** (highlight your GitHub repositories)
- **Certifications** (if any)

**Formatting Tips:**
- Use clear, professional fonts (Arial, Calibri, Times New Roman)
- Keep it to 1-2 pages
- Use bullet points for easy scanning
- Include quantifiable achievements
- Match the design to your portfolio's professional style

### **5. Testing the Download**

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Test the download button:**
   - Click the "Download Resume" button in the hero section
   - Verify the file downloads with the correct name
   - Check that the file opens properly

### **6. Customization Options**

**Change the download filename:**
```typescript
// In src/components/Hero.tsx
link.download = 'Your_Custom_Filename.pdf';
```

**Add multiple resume formats:**
```typescript
const handleDownloadResume = (format = 'pdf') => {
  const link = document.createElement('a');
  link.href = `/resume.${format}`;
  link.download = `Sandeep_K_Gupta_Resume.${format}`;
  link.target = '_blank';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```

### **7. SEO and Accessibility**

**For better SEO, add meta tags:**
```html
<!-- In index.html -->
<meta name="description" content="Sandeep K Gupta - Senior Frontend Engineer Resume">
<meta property="og:title" content="Sandeep K Gupta - Resume">
```

### **8. File Structure**
```
public/
├── resume.pdf          ← Your resume file
├── profile-image.jpg   ← Your profile photo
└── ... (other assets)
```

## 🎯 **Quick Setup Commands**

```bash
# 1. Copy your resume to the public folder
cp ~/Downloads/your-resume.pdf public/resume.pdf

# 2. Start the development server
npm run dev

# 3. Test the download functionality
# Click the "Download Resume" button in your portfolio
```

## ✅ **Verification Checklist**

- [ ] Resume file is in the `public` folder
- [ ] File opens correctly when downloaded
- [ ] Download button works on all devices
- [ ] File size is reasonable (< 5MB)
- [ ] Content is up-to-date and professional
- [ ] Format is consistent with portfolio design

Your resume download feature is now ready! Visitors to your portfolio can easily download your professional resume with just one click. 