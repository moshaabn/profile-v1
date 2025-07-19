export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohamed Shaaban",
    "jobTitle": "Senior Software Engineer",
    "description": "Senior Software Engineer with 7+ years of experience in full-stack development",
    "url": "https://shaabohub.com",
    "image": "https://shaabohub.com/me.png",
    "sameAs": [
      "https://linkedin.com/in/mohamed-shaaban-33b805ab",
      "https://github.com/moshaabn",
      "https://shaabohub.com"
    ],
    "knowsAbout": [
      ".NET Core",
      "Node.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Database Optimization",
      "RESTful APIs",
      "Software Architecture"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "AlexApps"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Alexandria",
      "addressCountry": "Egypt"
    },
    "email": "mo.shaaban.dev@gmail.com",
    "telephone": "+20-100-7943-118"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
