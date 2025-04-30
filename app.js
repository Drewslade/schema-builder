const schemaDefinitions = {
  Article: [
    { id: 'headline', label: 'Headline', type: 'text', tooltip: 'Title of the article' },
    { id: 'description', label: 'Description', type: 'textarea', tooltip: 'Summary of the article' },
    { id: 'author', label: 'Author', type: 'text', tooltip: 'Name of the article author' },
    { id: 'image', label: 'Image URL', type: 'text', tooltip: 'Primary image of the article' },
    { id: 'publishDate', label: 'Publish Date', type: 'date', tooltip: 'Date of publication' },
    { id: 'dateModified', label: 'Updated Date', type: 'date', tooltip: 'Date of last update' },
    { id: 'url', label: 'Article URL', type: 'text', tooltip: 'Canonical URL' },
    { id: 'mainEntityOfPage', label: 'Main Entity URL', type: 'text', tooltip: 'Usually same as Article URL' },
    { id: 'publisherName', label: 'Publisher Name', type: 'text', tooltip: 'Publisher name' },
    { id: 'publisherLogo', label: 'Publisher Logo URL', type: 'text', tooltip: 'Logo image URL of the publisher' }
  ],
  Organization: [
    { id: 'name', label: 'Organization Name', type: 'text', tooltip: 'The official name of the organization' },
    { id: 'url', label: 'URL', type: 'text', tooltip: 'Website URL' },
    { id: 'logo', label: 'Logo URL', type: 'text', tooltip: 'Logo image URL' },
    { id: 'sameAs', label: 'Social Profiles', type: 'text', tooltip: 'Comma-separated list of profile URLs' },
    { id: 'foundingDate', label: 'Founding Date', type: 'date', tooltip: 'Date founded' },
    { id: 'founders', label: 'Founders', type: 'text', tooltip: 'Comma-separated list of names' },
    { id: 'contactEmail', label: 'Contact Email', type: 'text', tooltip: 'Support or general email' }
  ],
  VideoObject: [
    { id: 'name', label: 'Video Title', type: 'text', tooltip: 'Name of the video' },
    { id: 'description', label: 'Description', type: 'textarea', tooltip: 'Summary of video content' },
    { id: 'thumbnailUrl', label: 'Thumbnail URL', type: 'text', tooltip: 'Image for thumbnail' },
    { id: 'uploadDate', label: 'Upload Date', type: 'date', tooltip: 'Date video was uploaded' },
    { id: 'durationMinutes', label: 'Duration (Minutes)', type: 'number', tooltip: 'Video duration in minutes' },
    { id: 'durationSeconds', label: 'Duration (Seconds)', type: 'number', tooltip: 'Video duration in seconds' },
    { id: 'contentUrl', label: 'Content URL', type: 'text', tooltip: 'Direct video file or stream URL' },
    { id: 'embedUrl', label: 'Embed URL', type: 'text', tooltip: 'Embed player URL (e.g. YouTube)' },
    { id: 'publisherName', label: 'Publisher Name', type: 'text', tooltip: 'Publisher name' },
    { id: 'publisherLogo', label: 'Publisher Logo URL', type: 'text', tooltip: 'Logo image URL' },
    { id: 'interactionCount', label: 'View Count', type: 'number', tooltip: 'Video views count' }
  ],
  Event: [
    { id: 'name', label: 'Event Name', type: 'text', tooltip: 'Name of the event' },
    { id: 'startDate', label: 'Start Date & Time', type: 'datetime-local', tooltip: 'When the event begins' },
    { id: 'endDate', label: 'End Date & Time', type: 'datetime-local', tooltip: 'When the event ends' },
    { id: 'locationName', label: 'Location Name', type: 'text', tooltip: 'Venue name' },
    { id: 'locationAddress', label: 'Location Address', type: 'text', tooltip: 'Full venue address' },
    { id: 'description', label: 'Event Description', type: 'textarea', tooltip: 'What the event is about' },
    { id: 'url', label: 'Event URL', type: 'text', tooltip: 'Link to the event page' },
    { id: 'image', label: 'Image URL', type: 'text', tooltip: 'Banner or event image' },
    { id: 'organizerName', label: 'Organizer Name', type: 'text', tooltip: 'Who is organizing it' },
    { id: 'organizerUrl', label: 'Organizer Website', type: 'text', tooltip: 'Organizer web link' }
  ],
  FAQPage: [
    { id: 'question1', label: 'Question 1', type: 'text', tooltip: 'First FAQ question' },
    { id: 'answer1', label: 'Answer 1', type: 'textarea', tooltip: 'Answer to the first question' },
    { id: 'question2', label: 'Question 2', type: 'text', tooltip: 'Second FAQ question' },
    { id: 'answer2', label: 'Answer 2', type: 'textarea', tooltip: 'Answer to the second question' }
  ],
  HowTo: [
    { id: 'name', label: 'How-To Title', type: 'text', tooltip: 'Name of the tutorial or guide' },
    { id: 'description', label: 'Description', type: 'textarea', tooltip: 'What this guide teaches' },
    { id: 'totalTime', label: 'Total Time (ISO)', type: 'text', tooltip: 'PT30M, PT1H30M, etc.' },
    { id: 'tool', label: 'Tools Needed', type: 'text', tooltip: 'Comma-separated list of tools' },
    { id: 'supply', label: 'Supplies/Materials', type: 'text', tooltip: 'Comma-separated supplies' },
    { id: 'step1', label: 'Step 1', type: 'textarea', tooltip: 'First instruction step' },
    { id: 'step2', label: 'Step 2', type: 'textarea', tooltip: 'Second instruction step' },
    { id: 'image', label: 'Image URL', type: 'text', tooltip: 'Visual for the tutorial' }
  ],
  JobPosting: [
    { id: 'title', label: 'Job Title', type: 'text', tooltip: 'Role name' },
    { id: 'description', label: 'Job Description', type: 'textarea', tooltip: 'Details about responsibilities' },
    { id: 'hiringOrganization', label: 'Hiring Organization', type: 'text', tooltip: 'Company name' },
    { id: 'jobLocation', label: 'Job Location', type: 'text', tooltip: 'Where the job is based' },
    { id: 'datePosted', label: 'Date Posted', type: 'date', tooltip: 'When it was listed' },
    { id: 'employmentType', label: 'Employment Type', type: 'text', tooltip: 'Full-time, part-time, etc.' },
    { id: 'validThrough', label: 'Valid Through', type: 'date', tooltip: 'Expiration date of posting' },
    { id: 'baseSalary', label: 'Base Salary', type: 'number', tooltip: 'Salary amount' },
    { id: 'salaryCurrency', label: 'Currency', type: 'text', tooltip: 'USD, EUR, etc.' },
    { id: 'url', label: 'Job Posting URL', type: 'text', tooltip: 'Link to the job listing' }
  ],
  Person: [
    { id: 'name', label: 'Full Name', type: 'text', tooltip: 'Name of the person' },
    { id: 'image', label: 'Image URL', type: 'text', tooltip: 'Photo or avatar' },
    { id: 'jobTitle', label: 'Job Title', type: 'text', tooltip: 'Position or role' },
    { id: 'worksFor', label: 'Works For', type: 'text', tooltip: 'Employer or company' },
    { id: 'sameAs', label: 'Social Profiles', type: 'text', tooltip: 'Links to profiles (comma-separated)' },
    { id: 'url', label: 'Personal Website', type: 'text', tooltip: 'Profile or homepage' },
    { id: 'email', label: 'Email', type: 'text', tooltip: 'Contact email' },
    { id: 'telephone', label: 'Phone Number', type: 'text', tooltip: 'Contact number' }
  ],
  Product: [
    { id: 'name', label: 'Product Name', type: 'text', tooltip: 'Title of the product' },
    { id: 'description', label: 'Description', type: 'textarea', tooltip: 'Brief overview' },
    { id: 'image', label: 'Image URL', type: 'text', tooltip: 'Photo of the product' },
    { id: 'sku', label: 'SKU', type: 'text', tooltip: 'Stock-keeping unit' },
    { id: 'brand', label: 'Brand Name', type: 'text', tooltip: 'Brand or manufacturer' },
    { id: 'offersPrice', label: 'Price', type: 'number', tooltip: 'Product price' },
    { id: 'offersCurrency', label: 'Currency', type: 'text', tooltip: 'USD, EUR, etc.' },
    { id: 'offersUrl', label: 'Purchase URL', type: 'text', tooltip: 'Link to buy' },
    { id: 'offersAvailability', label: 'Availability', type: 'text', tooltip: 'InStock, OutOfStock, etc.' },
    { id: 'aggregateRatingValue', label: 'Rating Value', type: 'number', tooltip: 'Average rating' },
    { id: 'aggregateRatingCount', label: 'Rating Count', type: 'number', tooltip: 'Total number of reviews' }
  ]
};

function renderForm(schemaType) {
  const container = document.getElementById('formFields');
  container.innerHTML = '';
  schemaDefinitions[schemaType].forEach(field => {
    const wrapper = document.createElement('div');
    const label = document.createElement('label');
    label.htmlFor = field.id;
    label.textContent = field.label;

    if (field.tooltip) {
      const icon = document.createElement('span');
      icon.className = 'tooltip-icon';
      icon.setAttribute('tabindex', '0');
      icon.setAttribute('data-tooltip', field.tooltip);
      icon.textContent = '?';
      label.appendChild(icon);
    }

    let input;
    if (field.type === 'textarea') {
      input = document.createElement('textarea');
    } else {
      input = document.createElement('input');
      input.type = field.type;
    }

    input.id = field.id;
    input.placeholder = field.tooltip;

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    container.appendChild(wrapper);
  });
}

function updateOutput() {
  const schemaType = document.getElementById('schemaType').value;
  const data = { "@context": "https://schema.org", "@type": schemaType };

  schemaDefinitions[schemaType].forEach(field => {
    const el = document.getElementById(field.id);
    if (!el || !el.value.trim()) return;
    const val = el.value.trim();

    switch (field.id) {
      case 'author':
        data.author = { "@type": "Person", name: val };
        break;
      case 'publisherName':
        data.publisher = data.publisher || { "@type": "Organization" };
        data.publisher.name = val;
        break;
      case 'publisherLogo':
        data.publisher = data.publisher || { "@type": "Organization" };
        data.publisher.logo = { "@type": "ImageObject", url: val };
        break;
      case 'sameAs':
        data.sameAs = val.split(',').map(v => v.trim()).filter(Boolean);
        break;
      case 'founders':
        data.founders = val.split(',').map(name => ({ "@type": "Person", name: name.trim() }));
        break;
      case 'durationMinutes':
      case 'durationSeconds': {
        const mins = parseInt(document.getElementById('durationMinutes')?.value) || 0;
        const secs = parseInt(document.getElementById('durationSeconds')?.value) || 0;
        data.duration = `PT${mins}M${secs}S`;
        break;
      }
      case 'interactionCount':
        data.interactionStatistic = {
          "@type": "InteractionCounter",
          interactionType: { "@type": "WatchAction" },
          userInteractionCount: Number(val)
        };
        break;
      case 'aggregateRatingValue':
      case 'aggregateRatingCount': {
        data.aggregateRating = data.aggregateRating || { "@type": "AggregateRating" };
        if (field.id === 'aggregateRatingValue') data.aggregateRating.ratingValue = Number(val);
        else data.aggregateRating.ratingCount = Number(val);
        break;
      }
      default:
        data[field.id] = val;
    }
  });

  document.getElementById('jsonOutput').textContent = JSON.stringify(data, null, 2);
}

function copyToClipboard() {
  const text = document.getElementById('jsonOutput').textContent;
  navigator.clipboard.writeText(text)
    .then(() => alert('JSON-LD copied to clipboard.'))
    .catch(err => alert('Copy failed: ' + err));
}

function validateMarkup() {
  window.open('https://search.google.com/test/rich-results', '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  const typeSelect = document.getElementById('schemaType');
  typeSelect.addEventListener('change', () => {
    renderForm(typeSelect.value);
    updateOutput();
  });

  document.getElementById('schema-form').addEventListener('input', updateOutput);
  document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
  document.getElementById('validateBtn').addEventListener('click', validateMarkup);

  renderForm(typeSelect.value);
  updateOutput();
});