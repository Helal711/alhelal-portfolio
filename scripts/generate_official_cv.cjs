const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function generateCV(outputPath) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 36, bottom: 36, left: 40, right: 40 }
    });

    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);

    const primaryBlue = '#0284c7';
    const darkText = '#1e293b';
    const grayText = '#475569';
    const lightBlue = '#e0f2fe';

    function drawSectionHeader(title) {
      doc.moveDown(0.6);
      const y = doc.y;
      doc.rect(40, y, 160, 18).fill('#0284c7');
      doc.fillColor('#ffffff').fontSize(9).font('Helvetica-Bold')
         .text(title, 46, y + 4);
      doc.fillColor(darkText);
      doc.y = y + 24;
    }

    // ==========================================
    // PAGE 1
    // ==========================================
    // Candidate Header
    doc.fillColor('#0284c7').fontSize(16).font('Helvetica-Bold')
       .text('Md. Al Helal Sarkar', 40, 42, { align: 'center' });
    doc.fillColor(darkText).fontSize(8.5).font('Helvetica')
       .text('Present Address: Mij Miji Poschimpara, Amzad Market, Siddirganj, Narayanganj 1430', { align: 'center' });
    doc.fillColor('#0369a1').fontSize(8.5).font('Helvetica-Bold')
       .text('01717 845557 | alhelal711@outlook.com ; alhelal711@gmail.com', { align: 'center' });

    doc.y = 88;

    // Objective
    drawSectionHeader('Objective');
    doc.fontSize(8).font('Helvetica').fillColor(darkText).text(
      'To obtain a challenging position that offers development for a career in various sectors of education innovation or in the strategic level of an organization where I can use my potentials with ultimate competence and aptitude, which will ultimately maximize the value of organization as well as enhance my working efficiency and personal development.',
      { align: 'justify', lineGap: 2 }
    );

    // Career Summary
    drawSectionHeader('Career Summary');
    doc.fontSize(8).font('Helvetica').fillColor(darkText).text(
      'I have previously worked as a data entry operator. From there I learned how to entry and process ERP software Oracle. I worked in the HR section for one year recruiting manpower there and doing it every day in payroll software. Now in my work compliance I see keeping the factory floors away from various risks. Make everyone aware of Labor Law and see if the company pays its dues properly. And design the company`s evacuation plant and company logo with graphic design. Typing speed Bangla 25 and English 35 word per minute',
      { align: 'justify', lineGap: 2 }
    );

    // Special Qualification
    drawSectionHeader('Special Qualification');
    doc.fontSize(8).font('Helvetica-Bold').text('Graphic Design,');

    // Experience / Employment History
    drawSectionHeader('Experience / Employment History');
    doc.fontSize(8.5).font('Helvetica-Bold').fillColor('#0f172a')
       .text('Total Year of Experience: 9.4 yrs');
    doc.moveDown(0.3);

    // KiDO
    doc.fontSize(9).font('Helvetica-Bold').fillColor('#0f172a')
       .text('• KiDO BD CO., LTD / KiDO Dhaka Co. Limited', 40, doc.y, { continued: true })
       .font('Helvetica').text('                                        (7 Oct 2023 - Continuing)', { align: 'right' });
    doc.fontSize(8.5).font('Helvetica-Bold').fillColor('#0284c7').text('Senior Officer – Administration');
    doc.moveDown(0.2);

    const kidoDuties = [
      {
        title: 'Facilities & Technical Maintenance:',
        desc: 'Direct comprehensive facility operations, ensuring high standards in daily housekeeping and gardening/landscaping. Oversee a diverse technical team responsible for electrical systems, AC maintenance, carpentry, masonry, plumbing, welding, and painting repairs to maintain a safe, highly functional work environment.'
      },
      {
        title: 'Construction & Renovation Supervision:',
        desc: 'Actively monitor and manage end-to-end site construction and facility renovation projects, ensuring all physical upgrades and structural work are completed efficiently, safely, and in alignment with company timelines.'
      },
      {
        title: 'Asset Management & Local Procurement:',
        desc: 'Manage the complete lifecycle of corporate furniture and facility assets, including meticulous inventory tracking. Independently execute local purchasing for general office supplies and maintenance materials, and efficiently manage the wastage store to ensure proper disposal or repurposing of materials.'
      },
      {
        title: 'Performance Reporting & Documentation:',
        desc: 'Track departmental workflows and compile detailed weekly and monthly administrative reports, providing actionable insights on facility operations, maintenance expenses, and project statuses to senior management.'
      },
      {
        title: 'Executive Coordination:',
        desc: 'Serve as the primary liaison and central coordinator for the Head of Administration, facilitating cross-departmental communication, streamlining daily administrative workflows, and assisting in broader operational planning.'
      }
    ];

    kidoDuties.forEach(d => {
      doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text(`> ${d.title} `, { continued: true })
         .font('Helvetica').fillColor(grayText).text(d.desc, { align: 'justify', lineGap: 1.5 });
      doc.moveDown(0.25);
    });

    // ==========================================
    // PAGE 2
    // ==========================================
    doc.addPage();

    // Ha-Meem Denim Ltd.
    doc.fontSize(9).font('Helvetica-Bold').fillColor('#0f172a')
       .text('• Ha-Meem Denim Ltd.', 40, 42, { continued: true })
       .font('Helvetica').text('                                      (06 September 2020 - 06 October 2023)', { align: 'right' });
    doc.fontSize(8.5).font('Helvetica-Bold').fillColor('#0284c7').text('Assistant Officer - Compliance');
    doc.moveDown(0.2);

    const hameemDuties = [
      'To prepare evacuation plan, awareness poster, videos on Environment and Social compliance requirement.',
      'To work on company brochure, product labelling tag and other related photos/ poster.',
      'To assist on meeting and training program arrangement.',
      'To assist during buyers’ compliance audit and visit.',
      'To assist in preparation of Corrective Action Plan (CAP) based on audit report of buyers’ compliance audit.',
      'To conduct internal audit at regular basis and to ensure effective monitoring and follow up system and report to management time to time on progress of each work.',
      'To assist in compliance related document preparation.',
      'To communicate with production department head or in-charge assigned by Supervisor.',
      'To work on awareness poster display, MSDS display.',
      'To perform other duties as assigned by Management.',
      'Additional: Co-Ordinator GM Admin'
    ];

    hameemDuties.forEach(item => {
      doc.fontSize(8).font('Helvetica').fillColor(darkText).text(`> ${item}`, { lineGap: 1.5 });
      doc.moveDown(0.15);
    });

    doc.moveDown(0.5);

    // Zaber Spinning Mills
    doc.fontSize(9).font('Helvetica-Bold').fillColor('#0f172a')
       .text('• Zaber Spinning Mills.', { continued: true })
       .font('Helvetica').text('                                                        (August 2018 - September 2020)', { align: 'right' });
    doc.fontSize(8.5).font('Helvetica-Bold').fillColor('#0284c7').text('Data Entry Operator & Office Management');
    doc.moveDown(0.2);

    const zaberDuties = [
      'Using Oracle ERP Software',
      'Create Monthly Work Schedule',
      'Entry Daily Job Order',
      'Entry Daily Move Order',
      'Entry Daily Work Order',
      'Updated Documents',
      'Yearly Tools Inventory'
    ];
    zaberDuties.forEach(item => {
      doc.fontSize(8).font('Helvetica').fillColor(darkText).text(`> ${item}`);
      doc.moveDown(0.1);
    });

    doc.moveDown(0.4);

    // Advance Design & Technology
    doc.fontSize(9).font('Helvetica-Bold').fillColor('#0f172a')
       .text('• Advance Design & Technology.', { continued: true })
       .font('Helvetica').text('                                                              (June 2017 - July 2018)', { align: 'right' });
    doc.fontSize(8.5).font('Helvetica-Bold').fillColor('#0284c7').text('Data Entry Operator');
    doc.moveDown(0.1);
    doc.fontSize(8).font('Helvetica').fillColor(darkText).text('> Entry Daily Production Data');

    doc.moveDown(0.6);

    // Academic Qualification
    drawSectionHeader('Academic Qualification');

    const eduList = [
      {
        inst: '• Pundra University of Science and Technology.',
        degree: '> BSC-in-Computer Science Engineering',
        year: '2022',
        gpa: '> GPA (if above 3.19/4.00)'
      },
      {
        inst: '• Palashbari Polytechnic Institute.',
        degree: '> Diploma-in-Computer Science Engineering',
        year: '2016',
        gpa: '> GPA (if above 3.16/4.00)'
      },
      {
        inst: '• Faridpur BL High School',
        degree: '> School Certificate (SSC) Secondary.',
        year: '2012',
        gpa: '> GPA (if above 4.50/5.00)'
      }
    ];

    eduList.forEach(e => {
      doc.fontSize(8.5).font('Helvetica-Bold').fillColor(darkText).text(e.inst, { continued: true })
         .font('Helvetica').text(`                                                                                                ${e.year}`, { align: 'right' });
      doc.fontSize(8).font('Helvetica').fillColor(grayText).text(e.degree);
      doc.fontSize(8).font('Helvetica').fillColor(grayText).text(e.gpa);
      doc.moveDown(0.3);
    });

    // ==========================================
    // PAGE 3
    // ==========================================
    doc.addPage();

    drawSectionHeader('Training Summary');

    const trainings = [
      ['Fire Safety Awareness', 'Fire Safety Awareness', '10minuteschool.com', 'Bangladesh', 'Online', '2023', 'Online'],
      ['BRAC Social Compliance', 'Fire Safety Training', 'socialcompliance.brac.net', 'Bangladesh', 'Online', '2022', 'Online'],
      ['Mobile Photography', 'Mobile Photography', '10minuteschool.com', 'Bangladesh', 'Online', '2023', 'Online'],
      ['Presentation & Public Speaking', 'Presentation & Public Speaking', '10minuteschool.com', 'Bangladesh', 'Online', '2023', 'Online'],
      ['Corporate Etiquette', 'Corporate Etiquette', '10minuteschool.com', 'Bangladesh', 'Online', '2023', 'Online'],
      ['Email Writing', 'Email Writing', '10minuteschool.com', 'Bangladesh', 'Online', '2023', 'Online'],
      ['Communication Secrets', 'Communication Secrets', '10minuteschool.com', 'Bangladesh', 'Online', '2023', 'Online'],
      ['How To Deal with Toxic People', 'How To Deal with Toxic People', 'hracademybd.com', 'Bangladesh', 'Online', '2023', 'Online'],
      ['Industrial Training', 'Data Communication & Network', 'Advanced Design & Tech', 'Bangladesh', 'Khilkhet', '2016', '3 Month'],
      ['Graphic Design', 'Adobe Photoshop & Illustrator', 'LEDP', 'Bangladesh', 'Gaibandha', '2016', '4 Month']
    ];

    // Table Header
    const colX = [40, 115, 190, 310, 370, 420, 460, 510];
    let ty = doc.y;
    doc.rect(40, ty, 515, 16).fill('#f1f5f9');
    doc.fillColor('#0f172a').fontSize(7).font('Helvetica-Bold');
    doc.text('Training Title', colX[0] + 4, ty + 4);
    doc.text('Topic', colX[1] + 2, ty + 4);
    doc.text('Institute', colX[2] + 2, ty + 4);
    doc.text('Country', colX[3] + 2, ty + 4);
    doc.text('Location', colX[4] + 2, ty + 4);
    doc.text('Year', colX[5] + 2, ty + 4);
    doc.text('Duration', colX[6] + 2, ty + 4);
    ty += 16;

    trainings.forEach((row, i) => {
      const bg = i % 2 === 0 ? '#ffffff' : '#f8fafc';
      doc.rect(40, ty, 515, 18).fill(bg);
      doc.fillColor(darkText).fontSize(6.5).font('Helvetica');
      doc.text(row[0], colX[0] + 4, ty + 5, { width: 70 });
      doc.text(row[1], colX[1] + 2, ty + 5, { width: 70 });
      doc.text(row[2], colX[2] + 2, ty + 5, { width: 115 });
      doc.text(row[3], colX[3] + 2, ty + 5, { width: 55 });
      doc.text(row[4], colX[4] + 2, ty + 5, { width: 45 });
      doc.text(row[5], colX[5] + 2, ty + 5, { width: 35 });
      doc.text(row[6], colX[6] + 2, ty + 5, { width: 40 });
      ty += 18;
    });

    doc.y = ty + 10;

    // Professional Qualification
    drawSectionHeader('Professional Qualification');
    doc.fontSize(7.5).font('Helvetica-Bold').fillColor(darkText)
       .text('Certification: Graphic Design   |   Institute: LEDP   |   Location: Gaibandha   |   From: Aug 15, 2016 To: Nov 15, 2016');

    doc.moveDown(0.6);

    // Career and Application Information
    drawSectionHeader('Career and Application Information');
    const appInfo = [
      ['Looking For', 'Top Level Job'],
      ['Available For', 'Full Time'],
      ['Present Salary', 'Tk. 32000'],
      ['Preferred Job Category', 'General Management/Admin, IT/Telecommunication, HR/Org. Development, Data Entry/Computer Operator, Graphic Designer, Other Special Skilled Jobs'],
      ['Preferred District', 'Anywhere in Bangladesh.'],
      ['Preferred Organization Types', 'Computer Hardware/Network Companies, Textile']
    ];

    appInfo.forEach(([k, v]) => {
      doc.fontSize(7.5).font('Helvetica-Bold').fillColor(darkText).text(`${k} : `, 40, doc.y, { continued: true })
         .font('Helvetica').fillColor(grayText).text(v);
      doc.moveDown(0.15);
    });

    // ==========================================
    // PAGE 4
    // ==========================================
    doc.addPage();

    drawSectionHeader('Skills');
    doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text('Fields of Skill & Description:');
    doc.moveDown(0.2);

    const skills = [
      'Graphics Design', 'Adobe Photoshop CC', 'Adobe illustrator CC',
      'MS Word/ Excel/ PowerPoint/', 'MICROSOFT OFFICE Project',
      'Logo Design', 'Business Card Design', 'Expert Web Browsing',
      'Photography', 'Video Editing.', 'Microsoft Windows Explore'
    ];
    skills.forEach(s => {
      doc.fontSize(7.5).font('Helvetica').fillColor(darkText).text(`• ${s}`);
    });
    doc.moveDown(0.3);
    doc.fontSize(8).font('Helvetica-Bold').fillColor('#0284c7').text('Description: I am expert in Graphics Design.');

    drawSectionHeader('Extra-Curricular Activities');
    doc.fontSize(8).font('Helvetica').fillColor(darkText).text('Graphics Design, Adobe Illustrator, Adobe Photoshop.');

    drawSectionHeader('Project');
    doc.fontSize(8.5).font('Helvetica-Bold').fillColor('#0f172a').text('• Fire App');
    doc.fontSize(8).font('Helvetica').fillColor(grayText).text(
      'I have created an app from hand notes on fire safety with answers to several questions about fire. Through which many things can be known about fire.',
      { lineGap: 1.5 }
    );

    drawSectionHeader('Achievements & Awards');
    const achs = [
      'Achieved FSCD Training Certificate',
      'Achieved BRAC Social Compliance Fire Safety Master Trainer Certificate Achieved the certificate from Govt Digital Innovation Fair.',
      'Has received a certificate from 10 Minute School on Presentation & Public Speaking, Communication Secrets, Fire Safety Awareness, Corporate Etiquette. Email Writing.'
    ];
    achs.forEach(a => {
      doc.fontSize(8).font('Helvetica').fillColor(darkText).text(`• ${a}`, { lineGap: 1.5 });
      doc.moveDown(0.2);
    });

    drawSectionHeader('Interests');
    doc.fontSize(8).font('Helvetica').fillColor(darkText).text('• Photoshop  • Surfing Through Internet  • Participating in Social Activists  • Designing');

    drawSectionHeader('Languages');
    doc.fontSize(8).font('Helvetica').fillColor(darkText)
       .text('• Read - English (Medium), Bangla (High)\n• Write - English (Medium), Bangla (High)\n• Spoken - English (Medium), Bangla (High)', { lineGap: 2 });

    // ==========================================
    // PAGE 5
    // ==========================================
    doc.addPage();

    drawSectionHeader('Personal Details');
    const personal = [
      ['Name', 'Md Al Helal Sarkar'],
      ['Father\'s Name', 'Md. Shaidur Rahaman'],
      ['Mother’s Name', 'Most. Helana Begum'],
      ['Permanent Address', 'Vill: Chandkarim, Post: Ghagerbazar, P/S: Shadullapur, Dist: Gaibandha'],
      ['Present Address', 'Mij Miji Poschimpara, Amzad Market, Siddirganj, Siddirganj, Narayanganj 1430.'],
      ['Nationality', 'Bangladeshi'],
      ['NID', '8227504480'],
      ['Marital Status', 'Married'],
      ['Blood Group', 'O (+ve)'],
      ['Sex', 'Male'],
      ['Religion', 'Islam'],
      ['Date & Place of Birth', '08 August, 1996; Gaibandha, Bangladesh']
    ];

    personal.forEach(([k, v]) => {
      doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text(`${k} : `, 40, doc.y, { continued: true })
         .font('Helvetica').fillColor(grayText).text(v);
      doc.moveDown(0.2);
    });

    doc.moveDown(0.5);

    drawSectionHeader('References');
    const refY = doc.y;

    // Ref 1
    doc.fontSize(8.5).font('Helvetica-Bold').fillColor('#0284c7').text('Reference 01', 40, refY);
    doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text('Name : ', 40, refY + 14, { continued: true }).font('Helvetica').text('Flt Lt Zevin Hasan Akash (Retd)');
    doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text('Organization : ', { continued: true }).font('Helvetica').text('KiDO BD Co., Ltd');
    doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text('Designation : ', { continued: true }).font('Helvetica').text('Head of Administration');
    doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text('Address : ', { continued: true }).font('Helvetica').text('Adamjee EPZ, Siddhirganj, Narayangonj.');
    doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text('Primary Mobile No : ', { continued: true }).font('Helvetica').text('01781-557981');
    doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text('Primary Email : ', { continued: true }).font('Helvetica').text('akash@kido.co.kr');
    doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text('Relation : ', { continued: true }).font('Helvetica').text('Professional');

    // Ref 2
    doc.fontSize(8.5).font('Helvetica-Bold').fillColor('#0284c7').text('Reference 02', 300, refY);
    doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text('Name : ', 300, refY + 14, { continued: true }).font('Helvetica').text('Saifur Rahman');
    doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text('Organization : ', 300, doc.y, { continued: true }).font('Helvetica').text('DBL Group');
    doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text('Designation : ', 300, doc.y, { continued: true }).font('Helvetica').text('Senior Manager');
    doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text('Address : ', 300, doc.y, { continued: true }).font('Helvetica').text('Gazipur, Dhaka, Bangladesh.');
    doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text('Primary Mobile No : ', 300, doc.y, { continued: true }).font('Helvetica').text('01608-871581');
    doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text('Primary Email : ', 300, doc.y, { continued: true }).font('Helvetica').text('saifur-rahman@dbl-group.com');
    doc.fontSize(8).font('Helvetica-Bold').fillColor(darkText).text('Relation : ', 300, doc.y, { continued: true }).font('Helvetica').text('Professional');

    // Signature line
    doc.moveDown(3);
    doc.fontSize(10).font('Helvetica-Bold').fillColor('#0f172a').text('MD AL HELAL SARKAR', 400, doc.y + 40, { align: 'center' });
    doc.fontSize(7.5).font('Helvetica').fillColor(grayText).text('(Signed Electronically)', 400, doc.y + 2, { align: 'center' });

    doc.end();
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
}

async function run() {
  await generateCV('./assets/cv.pdf');
  await generateCV('./public/assets/cv.pdf');
  await generateCV('./portfolio/assets/cv.pdf');
  console.log('Successfully generated complete 5-page official CV PDF files!');
}

run().catch(console.error);
