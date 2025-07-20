export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohamed Shaaban",
    "jobTitle": "Senior Software Engineer & Backend Team Lead",
    "description": "Senior Software Engineer & Backend Team Lead with 7+ years experience. Expert in .NET Core, Node.js, microservices architecture. Proven backend team leadership in scalable enterprise applications.",
    "url": "https://shaabohub.com",
    "image": "https://shaabohub.com/me.png",
    "sameAs": [
      "https://linkedin.com/in/mohamed-shaaban-33b805ab",
      "https://github.com/moshaabn",
      "https://shaabohub.com"
    ],
    "knowsAbout": [
      "Senior Software Engineering",
      "Backend Development", 
      "Team Leadership",
      ".NET Core",
      "Node.js",
      "Microservices Architecture",
      "Enterprise Applications",
      "Database Optimization",
      "API Development",
      "Software Architecture",
      "Backend Team Management"
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
