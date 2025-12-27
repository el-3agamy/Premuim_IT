    lucide.createIcons();
    const client_logo_popup = document.getElementById('client_logo_popup') ;
    const client_logo_add_btn = document.getElementById('client_logo_add_btn') ;
    const close_btn_popup = document.getElementById("close_btn_popup");
    const add_btn_popup = document.getElementById('add_btn_popup');
    const client_logos_container = document.getElementById ('client_logos_container') ;
  client_logo_popup.addEventListener('click', (e) => {
  if (e.target === client_logo_popup) {
    e.stopPropagation();
    client_logo_popup.style.display = "none";
    document.body.classList.remove('modal-open');
  }
});
  add_btn_popup.addEventListener('click', () => {
  // main wrapper
  const div = document.createElement('div');
  div.classList.add('update');
  div.style.margin = '20px 0';

  /* ================= Logo Row ================= */
  const logoRow = document.createElement('div');
  logoRow.classList.add('logo-row');

  // Client Name
  const labelName = document.createElement('label');
  labelName.style.flexGrow = '1';
  labelName.innerHTML = `
    Client Name :
    <input type="text" placeholder="Client Name" value="w">
  `;

  // Client URL
  const labelUrl = document.createElement('label');
  labelUrl.style.flexGrow = '1';
  labelUrl.innerHTML = `
    Client URL :
    <input type="url" placeholder="https://example.com">
  `;

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('danger');
  deleteBtn.innerHTML = `<i data-lucide="trash-2"></i>`;

  // delete action
  deleteBtn.addEventListener('click', () => {
    div.remove();
  });

  logoRow.append(labelName, labelUrl, deleteBtn);

  /* ================= Upload Section ================= */
  const uploadWrapper = document.createElement('div');

  const uploadLabel = document.createElement('label');
  uploadLabel.textContent = 'Logo';

  const uploadDiv = document.createElement('div');
  uploadDiv.classList.add('upload');
  uploadDiv.innerHTML = `
    <i data-lucide="image"></i>
    <span>Upload new image</span>
    <button>
      <input type="file" accept="image/*">
    </button>
  `;

  uploadWrapper.append(uploadLabel, uploadDiv);

  /* ================= Recommendation Text ================= */
  const info = document.createElement('p');
  info.id = 'logo_span_recomnd';
  info.textContent = 'Company logo (recommended: transparent PNG, 200x100px)';

  /* ================= Assemble ================= */
  div.append(logoRow, uploadWrapper, info);

  // add newest to top
  client_logos_container.prepend(div);

  // re-render lucide icons
  lucide.createIcons();

  //
  client_logo_popup.style.display = "none"

});


    close_btn_popup.addEventListener('click' , ()=>{
      client_logo_popup.style.display = "none"
    })
    client_logo_popup.style.display = "none" ;
    client_logo_add_btn.addEventListener('click' , ()=>{
      client_logo_popup.style.display = "block"
    })
    


    //////////////////////////

    // industry popup section :
  const industry_add_popup = document.getElementById('industry_add_popup');
  const industry_popup = document.getElementById('industry_popup');
  const industry_close_btn_popup = document.getElementById('industry_close_btn_popup');
  const industry_add_btn_popup = document.getElementById('industry_add_btn_popup');
  const industry_container = document.getElementById('industry_container');

  industry_popup.style.display = "none"
  industry_popup.addEventListener('click' , (e)=>{
    if(e.target === industry_popup){
        e.target.style.display = "none"
    }
  })
  // Show popup
  industry_add_popup.addEventListener('click', () => {
    industry_popup.style.display = 'flex';
  });

  // Close popup
  industry_close_btn_popup.addEventListener('click', () => {
    industry_popup.style.display = 'none';
  });

  // Add industry from popup
  industry_add_btn_popup.addEventListener('click', () => {
    // Get values from inputs
    const title = document.getElementById('industry_title').value;
    const description = document.getElementById('industry_description').value;
    
    // Key benefits: get all inputs inside popup
    const keyBenefitInputs = industry_popup.querySelectorAll('#key_benfites');
    const keyBenefits = [];
    keyBenefitInputs.forEach(input => {
      if (input.value.trim() !== '') keyBenefits.push(input.value.trim());
    });

    // Create new industry div
    const newIndustry = document.createElement('div');
    newIndustry.classList.add('industry');
    newIndustry.style.margin = '20px 0';
    newIndustry.innerHTML = `
      <label>Industry Title : <input value="${title}"></label>
      <label>Industry Description : <textarea>${description}</textarea></label>
      <label>Key Benefits :</label>
      ${keyBenefits.map(k => `<input type="text" value="${k}"><br><br>`).join('')}
      <div>
        <label>Logo</label>
        <div class="upload">
          <i data-lucide="image"></i>
          <span>Upload new image</span>
          <button><input type="file" accept="image/*"></button>
        </div>
      </div>
    `;

    // Insert new industry at the top
    industry_container.prepend(newIndustry);

    // Reset popup inputs if needed
    document.getElementById('industry_title').value = '';
    document.getElementById('industry_description').value = '';
    keyBenefitInputs.forEach(input => input.value = '');

    // Close popup
    industry_popup.style.display = 'none';

    // Re-initialize lucide icons for new elements
    if (window.lucide) lucide.replace();
  });


  ////////////////////////////////////////
  
  // Service popup section
  const service_popup_add_btn = document.getElementById('service_popup_add_btn');
  const service_popup = document.getElementById('service_popup');
  const service_close_btn_popup = document.getElementById('service_close_btn_popup');
  const service_add_btn_popup = document.getElementById('service_add_btn_popup');
  const service_container = document.getElementById('service_container');

  // Hide popup initially
  service_popup.style.display = "none";

  // Click outside popup closes it
  service_popup.addEventListener('click', (e) => {
    if (e.target === service_popup) {
      service_popup.style.display = "none";
    }
  });

  // Show popup when add button clicked
  service_popup_add_btn.addEventListener('click', () => {
    service_popup.style.display = 'flex';
  });

  // Close popup
  service_close_btn_popup.addEventListener('click', () => {
    service_popup.style.display = 'none';
  });

  // Add service from popup
  service_add_btn_popup.addEventListener('click', () => {
    // Get values from popup inputs
    const title = document.getElementById('service_title_popup').value;
    const icon = document.getElementById('service_icon_popup').value;
    const description = document.getElementById('service_description_popup').value;
    const ctaLabel = document.getElementById('cta_label_popup').value;
    const ctaUrl = document.getElementById('cta_url_popup').value;

    // Validation - at least title is required
    if (!title.trim()) {
      alert('Service title is required!');
      return;
    }

    // Create new service div
    const newService = document.createElement('div');
    newService.classList.add('service');
    newService.style.margin = '20px 0';
    newService.innerHTML = `
      <div class="inner_service">
        <label for="service_title">Service Title : <input value="${title}"></label>
        <label for="service_icon">Service Icon : <input value="${icon}"></label>
      </div>
      <div>
        <label for="service_description">Service description : <textarea>${description}</textarea></label>
      </div>
      <div class="inner_service">
        <label for="cta_label">CTA Label(Optional) : <input value="${ctaLabel}"></label>
        <label for="cta_url">CTA URL(Optional) : <input value="${ctaUrl}"></label>
      </div>
    `;

    // Insert new service at the top
    service_container.prepend(newService);

    // Reset popup inputs
    document.getElementById('service_title_popup').value = '';
    document.getElementById('service_icon_popup').value = '';
    document.getElementById('service_description_popup').value = '';
    document.getElementById('cta_label_popup').value = '';
    document.getElementById('cta_url_popup').value = '';

    // Close popup
    service_popup.style.display = 'none';

    // Re-initialize lucide icons if needed
    if (window.lucide) lucide.replace();
  });
