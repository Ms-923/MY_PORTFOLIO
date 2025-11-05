/* VS Code Portfolio - Consolidated CSS */

/* ===== Theme Variables ===== */
:root {
    /* VS Code Dark+ Theme Colors */
    --bg-color: #1e1e1e;
    --sidebar-bg: #252526;
    --activity-bar-bg: #333333;
    --editor-bg: #1e1e1e;
    --title-bar-bg: #3c3c3c;
    --status-bar-bg: #007acc;
    --tab-bg: #2d2d2d;
    --tab-active-bg: #1e1e1e;
    --text-color: #d4d4d4;
    --text-muted: #858585;
    --border-color: #474747;
    --selection-bg: #264f78;
    
    /* Syntax Highlighting Colors */
    --keyword-color: #569cd6;
    --variable-color: #9cdcfe;
    --string-color: #ce9178;
    --number-color: #b5cea8;
    --property-color: #9cdcfe;
    --comment-color: #6a9955;
    --builtin-color: #dcdcaa;
    --parameter-color: #9cdcfe;
}

/* ===== Base Styles ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Fira Code', monospace;
    background-color: var(--bg-color);
    color: var(--text-color);
    height: 100vh;
    overflow: hidden;
}

/* Custom Scrollbar Styling */
::-webkit-scrollbar {
    width: 14px;
    height: 14px;
}

::-webkit-scrollbar-track {
    background: var(--editor-bg);
    border-left: 1px solid var(--border-color);
}

::-webkit-scrollbar-thumb {
    background: #3e3e42;
    border: 3px solid var(--editor-bg);
    border-radius: 7px;
}

::-webkit-scrollbar-thumb:hover {
    background: #4e4e52;
}

::-webkit-scrollbar-corner {
    background: var(--editor-bg);
}

/* Firefox scrollbar compatibility */
* {
    scrollbar-width: thin;
    scrollbar-color: #3e3e42 var(--editor-bg);
}

.vscode-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

/* ===== Title Bar ===== */
.title-bar {
    background-color: var(--title-bar-bg);
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 12px;
    user-select: none;
}

.window-controls {
    display: flex;
    gap: 8px;
}

.control {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
}

.close {
    background-color: #ff5f57;
}

.minimize {
    background-color: #febc2e;
}

.maximize {
    background-color: #28c840;
}

.window-actions {
    display: flex;
    gap: 15px;
}

.action {
    cursor: pointer;
}

.mobile-menu-toggle {
    display: none;
}

/* ===== Main Container ===== */
.main-container {
    display: flex;
    flex: 1;
    overflow: hidden;
}

/* ===== Sidebar Container ===== */
.sidebar-container {
    display: flex !important;
    flex-direction: row !important;
    min-width: 300px; /* Combined width of activity bar and sidebar */
}

/* ===== Activity Bar ===== */
.activity-bar {
    background-color: var(--activity-bar-bg);
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0;
}

.activity-icons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

.activity-icon {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    color: var(--text-muted);
    font-size: 20px;
}

.activity-icon:hover {
    color: var(--text-color);
}

.activity-icon.active {
    color: var(--text-color);
}

.activity-icon.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    height: 28px;
    width: 2px;
    background-color: var(--text-color);
}

.tooltip {
    position: absolute;
    left: 50px;
    background-color: var(--title-bar-bg);
    padding: 5px 8px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s;
    z-index: 10;
}

.activity-icon:hover .tooltip {
    visibility: visible;
    opacity: 1;
}

.bottom-icons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

/* ===== Sidebar ===== */
.sidebar {
    background-color: var(--sidebar-bg);
    width: 250px;
    border-right: 1px solid var(--border-color);
    overflow-y: auto;
    display: block !important; /* Force sidebar to be visible by default */
    z-index: 100; /* Ensure sidebar appears above other elements */
}

#explorer-sidebar {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
}

#explorer-icon.active ~ #explorer-sidebar {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
}

.sidebar-header {
    padding: 10px;
    font-size: 11px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-muted);
}

.sidebar-actions {
    display: flex;
    gap: 8px;
}

.folder-structure {
    padding: 5px 0;
}

.folder {
    padding: 3px 10px;
    cursor: pointer;
    font-size: 13px;
}

.folder-name {
    display: flex;
    align-items: center;
    gap: 5px;
}

.folder-contents {
    margin-left: 15px;
}

.file {
    padding: 3px 10px;
    cursor: pointer;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.file:hover, .folder:hover {
    background-color: rgba(255, 255, 255, 0.05);
}

.file.active {
    background-color: rgba(255, 255, 255, 0.1);
}

/* ===== Editor Area ===== */
.editor-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: var(--editor-bg);
}

/* ===== Tabs ===== */
.tabs {
    display: flex;
    background-color: var(--tab-bg);
    height: 35px;
    overflow-x: auto;
    user-select: none;
}

.tab {
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    height: 100%;
    min-width: 120px;
    font-size: 12px;
    border-right: 1px solid var(--border-color);
    cursor: pointer;
    color: var(--text-muted);
}

.tab.active {
    background-color: var(--tab-active-bg);
    color: var(--text-color);
    border-bottom: 1px solid var(--status-bar-bg);
}

/* Close tab functionality removed */

/* ===== Editor Content ===== */
.editor-content {
    flex: 1;
    overflow: auto;
    position: relative;
    scrollbar-gutter: stable;
}

/* ===== Content Area ===== */
.content-area {
    width: 100%;
    height: 100%;
    padding: 30px 40px;
    overflow-y: auto;
    color: var(--text-color);
    background-color: var(--editor-bg);
}

.content-section {
    display: none;
    animation: fadeIn 0.5s ease-in-out;
}

.content-section.active {
    display: block;
}

/* ===== Section Styling ===== */
.section-header {
    margin-bottom: 20px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 10px;
}

.section-header h2 {
    color: var(--keyword-color);
    font-size: 24px;
    font-weight: 500;
}

.section-content {
    padding: 10px 0;
}

/* ===== About Section Styles ===== */
.profile-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.profile-header {
    margin-bottom: 20px;
}

.profile-header h1 {
    font-size: 32px;
    color: var(--variable-color);
    margin-bottom: 5px;
}

.profile-header h3 {
    font-size: 18px;
    color: var(--string-color);
    font-weight: 400;
}

.profile-description p {
    line-height: 1.6;
    margin-bottom: 15px;
    font-size: 16px;
}

/* ===== Projects Section Styles ===== */
.project-card {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    border-left: 3px solid var(--status-bar-bg);
}

.project-card h3 {
    color: var(--variable-color);
    margin-bottom: 10px;
    font-size: 20px;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 15px;
}

.tech-tag {
    background-color: rgba(86, 156, 214, 0.2);
    color: var(--keyword-color);
    padding: 3px 8px;
    border-radius: 3px;
    font-size: 12px;
}

.project-links {
    display: flex;
    gap: 15px;
    margin-top: 15px;
}

.project-links a {
    color: var(--status-bar-bg);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    transition: color 0.2s;
}

.project-links a:hover {
    color: var(--text-color);
}

/* ===== Skills Section Styles ===== */
.skills-category {
    margin-bottom: 30px;
}

.skills-category h3 {
    color: var(--string-color);
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 500;
}

/* Skill bars removed */

.tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;
}

.tool-item {
    background-color: rgba(255, 255, 255, 0.05);
    padding: 8px 12px;
    border-radius: 4px;
    text-align: center;
    font-size: 14px;
}

/* ===== Contact Section Styles ===== */
.contact-container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.contact-details {
    flex: 1;
    min-width: 250px;
}

.contact-info {
    margin-bottom: 30px;
}

.contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    color: var(--text-color);
}

.contact-item i {
    margin-right: 15px;
    font-size: 20px;
    color: var(--keyword-color);
    width: 25px;
    text-align: center;
}

.social-links {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(86, 156, 214, 0.1);
    color: var(--keyword-color);
    font-size: 20px;
    transition: all 0.3s ease;
}

.social-link:hover {
    background-color: var(--keyword-color);
    color: var(--editor-bg);
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
}

.contact-item i {
    color: var(--status-bar-bg);
    font-size: 18px;
    width: 20px;
    text-align: center;
}

.contact-form {
    background-color: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 5px;
    flex: 1;
    min-width: 300px;
    max-width: 400px;
}

.form-group {
    margin-bottom: 12px;
}

.form-group label {
    display: block;
    margin-bottom: 4px;
    color: var(--text-muted);
    font-size: 14px;
}

.form-control {
    width: 100%;
    padding: 6px 8px;
    background-color: var(--editor-bg);
    border: 1px solid var(--border-color);
    color: var(--text-color);
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
}

textarea.form-control {
    min-height: 80px;
    resize: vertical;
}

/* Form status alerts */
#form-status {
    display: none;
}

.alert {
    padding: 12px 15px;
    border-radius: 4px;
    margin-bottom: 15px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.alert i {
    font-size: 16px;
}

.alert-success {
    background-color: rgba(40, 167, 69, 0.2);
    border-left: 3px solid #28a745;
    color: #9be0ac;
    display: none;
}

.alert-danger {
    background-color: rgba(220, 53, 69, 0.2);
    border-left: 3px solid #dc3545;
    color: #f5b8bf;
    display: none;
}

/* Submit button */
.btn {
    display: inline-block;
    padding: 8px 16px;
    background-color: var(--keyword-color);
    color: var(--editor-bg);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    transition: all 0.3s ease;
}

.btn:hover {
    background-color: var(--string-color);
}

.btn-primary {
    background-color: var(--status-bar-bg);
    color: #fff;
}

.btn-primary:hover {
    background-color: #005999;
    transform: translateY(-2px);
}

/* Resume Section Styles */
.resume-section {
    margin-bottom: 40px;
    animation: fadeIn 0.5s ease-in-out;
}

.resume-section h3 {
    color: var(--keyword-color);
    font-size: 22px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 10px;
}

.resume-section h4 {
    color: var(--variable-color);
    font-size: 18px;
    margin-bottom: 5px;
}

/* Timeline for Education */
.timeline {
    position: relative;
    padding-left: 30px;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    bottom: 10px;
    width: 2px;
    background-color: var(--border-color);
}

.timeline-item {
    position: relative;
    margin-bottom: 30px;
}

.timeline-dot {
    position: absolute;
    left: -34px;
    top: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--status-bar-bg);
    border: 2px solid var(--editor-bg);
}

.timeline-content {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
    padding: 15px;
    border-left: 3px solid var(--status-bar-bg);
}

.timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.timeline-date {
    color: var(--text-muted);
    font-size: 14px;
}

.timeline-institution {
    color: var(--string-color);
    font-size: 16px;
    margin-bottom: 10px;
}

.timeline-description {
    line-height: 1.6;
    font-size: 14px;
}

.timeline-description ul {
    margin-top: 5px;
    padding-left: 20px;
}

.timeline-description li {
    margin-bottom: 5px;
}

/* Skills Category Adjustments */
.skills-category h4 {
    color: var(--string-color);
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 500;
}

.skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

.skill-tag {
    background-color: rgba(86, 156, 214, 0.2);
    color: var(--keyword-color);
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 14px;
    display: inline-block;
    border: 1px solid rgba(86, 156, 214, 0.3);
}

/* Project Cards Adjustments */
.project-card h4 {
    margin-bottom: 10px;
}

/* Certificates Section */
.certificates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 10px;
}

/* Badges Section */
.badges-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 10px;
}

.certificate-card {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
    padding: 20px;
    display: flex;
    gap: 15px;
    border-left: 3px solid var(--status-bar-bg);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.certificate-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.certificate-icon {
    font-size: 30px;
    color: var(--status-bar-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: rgba(0, 122, 204, 0.1);
    border-radius: 50%;
    flex-shrink: 0;
}

.certificate-content {
    flex: 1;
}

.certificate-content h4 {
    color: var(--variable-color);
    font-size: 16px;
    margin-bottom: 5px;
}

.certificate-issuer {
    color: var(--string-color);
    font-size: 14px;
    margin-bottom: 5px;
}

.certificate-date {
    color: var(--text-muted);
    font-size: 12px;
    margin-bottom: 10px;
}

.certificate-link {
    color: var(--status-bar-bg);
    text-decoration: none;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: color 0.2s;
}

.certificate-link:hover {
    color: var(--text-color);
}

/* Badge Card Styles */
.badge-card {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
    padding: 20px;
    display: flex;
    gap: 15px;
    border-left: 3px solid var(--status-bar-bg);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.badge-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.badge-icon {
    font-size: 30px;
    color: #4285F4; /* Google blue */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: rgba(66, 133, 244, 0.1);
    border-radius: 50%;
    flex-shrink: 0;
}

.badge-info {
    flex: 1;
}

.badge-info h3 {
    color: var(--variable-color);
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 500;
}

.badge-platform {
    color: var(--string-color);
    font-size: 14px;
    margin-bottom: 5px;
}

.badge-date {
    color: var(--text-muted);
    font-size: 12px;
    margin-bottom: 10px;
}

.badge-link {
    color: var(--status-bar-bg);
    text-decoration: none;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: color 0.2s;
}

.badge-link:hover {
    color: var(--text-color);
}

@media (max-width: 768px) {
    .certificates-grid {
        grid-template-columns: 1fr;
    }
    
    .badges-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-container {
        flex-direction: column;
    }
    
    .contact-form {
        max-width: 100%;
    }
}

/* ===== Status Bar ===== */
.status-bar {
    height: 22px;
    background-color: var(--status-bar-bg);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-size: 12px;
}

.left-items, .right-items {
    display: flex;
    gap: 15px;
}

/* ===== Animations ===== */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Cursor animation removed */

/* ===== Responsive Design ===== */
@media (max-width: 768px) {
    .sidebar {
        width: 200px;
    }
    
    .profile-info {
        flex-direction: column;
    }
    
    .skill-item {
        flex-wrap: wrap;
    }
    
    .skill-name {
        width: 100%;
    }
    
    .tools-grid {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
}

@media (max-width: 576px) {
    .mobile-menu-toggle {
        display: block;
        margin-right: 15px;
    }
    
    .sidebar-container {
        position: absolute;
        z-index: 100;
        height: 100%;
        min-width: auto !important;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        display: none;
    }
    
    .sidebar-container.visible {
        transform: translateX(0);
        display: flex;
    }
    
    .sidebar {
        width: 180px;
    }
    
    #explorer-sidebar {
        width: 170px !important;
    }
    
    .activity-bar {
        width: 40px;
        position: fixed;
        left: 0;
        top: 30px;
        bottom: 22px;
        z-index: 99;
    }
    
    .activity-icon {
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
    
    .editor-area {
        flex: 1;
        margin-left: 40px;
        width: calc(100% - 40px);
    }
}
