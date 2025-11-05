/**
 * VS Code Portfolio - Consolidated JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('VS Code Portfolio initialized');
    
    // DOM Elements
    const sidebar = document.getElementById('explorer-sidebar');
    const activityIcons = document.querySelectorAll('.activity-icon');
    const explorerIcon = document.getElementById('explorer-icon');
    const tabs = document.querySelectorAll('.tab');
    const contentSections = document.querySelectorAll('.content-section');
    const files = document.querySelectorAll('.file');
    const editorContent = document.querySelector('.editor-content');
    
    // State management
    let currentTab = 'about';
    let sidebarVisible = true;
    
    /**
     * Tab switching functionality
     * @param {string} tabId - The ID of the tab to activate
     */
    function activateTab(tabId) {
        console.log(`Activating tab: ${tabId}`);
        currentTab = tabId;
        
        // Function to activate a tab and show its content
        function activateTab(tabId) {
            // Hide all content sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the selected content section
            const contentSection = document.getElementById(tabId + '-section');
            if (contentSection) {
                contentSection.classList.add('active');
            }
            
            // Update tab active state
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            const activeTab = document.querySelector(`.tab[data-tab="${tabId}"]`);
            if (activeTab) {
                activeTab.classList.add('active');
            }
            
            // Update sidebar file active state
            document.querySelectorAll('.file').forEach(file => {
                file.classList.remove('active');
            });
            
            const activeFile = document.querySelector(`.file[data-file="${tabId}"]`);
            if (activeFile) {
                activeFile.classList.add('active');
            }
            
            // Update explorer icon in activity bar
            const validTabs = ['about', 'education', 'resume', 'certificates', 'contact'];
            if (validTabs.includes(tabId)) {
                document.querySelectorAll('.activity-icon').forEach(icon => {
                    icon.classList.remove('active');
                });
                document.querySelector('.explorer-icon').classList.add('active');
                
                // Show sidebar
                document.querySelector('.sidebar').style.display = 'block';
                document.querySelector('.sidebar').style.visibility = 'visible';
                document.querySelector('.sidebar').style.opacity = '1';
            }
            sidebarVisible = true;
        }
        
        // Deactivate all tabs and sections
        tabs.forEach(tab => tab.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));
        files.forEach(file => file.classList.remove('active'));
        
        // Activate the selected tab and section
        const selectedTab = document.querySelector(`.tab[data-tab="${tabId}"]`);
        const selectedSection = document.getElementById(`${tabId}-section`);
        const selectedFile = document.querySelector(`.file[data-file="${tabId}"]`);
        
        if (selectedTab) {
            selectedTab.classList.add('active');
        }
        
        if (selectedSection) {
            selectedSection.classList.add('active');
        }
        
        if (selectedFile) {
            selectedFile.classList.add('active');
        }
        
        // Always ensure sidebar is visible when switching tabs
        showSidebar();
        
        // Always ensure explorer icon is active when switching tabs
        activateExplorerIcon();
    }
    
    /**
     * Show the sidebar
     */
    function showSidebar() {
        if (sidebar) {
            const sidebarContainer = document.querySelector('.sidebar-container');
            if (window.innerWidth <= 576) {
                sidebarContainer.classList.add('visible');
            } else {
                sidebar.style.display = 'block';
                sidebar.style.visibility = 'visible';
                sidebar.style.opacity = '1';
            }
            sidebarVisible = true;
        }
    }
    
    /**
     * Hide the sidebar
     */
    function hideSidebar() {
        if (sidebar) {
            const sidebarContainer = document.querySelector('.sidebar-container');
            if (window.innerWidth <= 576) {
                sidebarContainer.classList.remove('visible');
            } else {
                sidebar.style.display = 'none';
            }
            sidebarVisible = false;
        }
    }
    
    /**
     * Activate the explorer icon
     */
    function activateExplorerIcon() {
        if (explorerIcon) {
            activityIcons.forEach(icon => icon.classList.remove('active'));
            explorerIcon.classList.add('active');
        }
    }
    
    // Initialize sidebar and explorer icon
    if (window.innerWidth <= 576) {
        // On mobile, don't show sidebar by default
        sidebarVisible = false;
    } else {
        showSidebar();
    }
    activateExplorerIcon();
    
    // Add event listeners for window control buttons in the top-left corner
    const closeControlBtn = document.querySelector('.window-controls .close');
    const minimizeControlBtn = document.querySelector('.window-controls .minimize');
    const maximizeControlBtn = document.querySelector('.window-controls .maximize');
    
    if (closeControlBtn) {
        closeControlBtn.addEventListener('click', () => {
            // Same functionality as the X button in the top-right
            document.body.classList.add('closing');
            setTimeout(() => {
                if (confirm('Close this portfolio?')) {
                    window.close();
                    window.location.href = 'about:blank';
                } else {
                    document.body.classList.remove('closing');
                }
            }, 300);
        });
    }
    
    if (minimizeControlBtn) {
        minimizeControlBtn.addEventListener('click', () => {
            // Same functionality as the minimize button in the top-right
            document.body.classList.add('minimized');
            const restoreBar = document.createElement('div');
            restoreBar.className = 'restore-bar';
            restoreBar.innerHTML = '<span class="restore-title">VS Code Portfolio (Minimized)</span><span class="restore-button">Restore</span>';
            document.body.appendChild(restoreBar);
            restoreBar.querySelector('.restore-button').addEventListener('click', () => {
                document.body.classList.remove('minimized');
                restoreBar.remove();
            });
        });
    }
    
    if (maximizeControlBtn) {
        maximizeControlBtn.addEventListener('click', () => {
            // Same functionality as the maximize button in the top-right
            document.body.classList.toggle('maximized');
        });
    }
    
    // Add event listener for mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            if (sidebarVisible) {
                hideSidebar();
            } else {
                showSidebar();
            }
        });
    }
    
    // Add event listener for close button (X)
    const closeButton = document.querySelector('.window-actions .fa-times').parentElement;
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            // Create closing animation
            document.body.classList.add('closing');
            
            // After animation, prompt to close
            setTimeout(() => {
                if (confirm('Close this portfolio?')) {
                    window.close();
                    // If window.close() doesn't work (most browsers prevent it)
                    // redirect to blank page or previous page
                    window.location.href = 'about:blank';
                    // Alternative: window.history.back();
                } else {
                    document.body.classList.remove('closing');
                }
            }, 300);
        });
    }
    
    // Add event listener for minimize button
    const minimizeButton = document.querySelector('.window-actions .fa-minus').parentElement;
    if (minimizeButton) {
        minimizeButton.addEventListener('click', () => {
            document.body.classList.add('minimized');
            
            // Create a restore bar
            const restoreBar = document.createElement('div');
            restoreBar.className = 'restore-bar';
            restoreBar.innerHTML = '<span class="restore-title">VS Code Portfolio (Minimized)</span><span class="restore-button">Restore</span>';
            document.body.appendChild(restoreBar);
            
            // Add event listener to restore button
            restoreBar.querySelector('.restore-button').addEventListener('click', () => {
                document.body.classList.remove('minimized');
                restoreBar.remove();
            });
        });
    }
    
    // Add event listener for maximize button
    const maximizeButton = document.querySelector('.window-actions .fa-square').parentElement;
    if (maximizeButton) {
        maximizeButton.addEventListener('click', () => {
            document.body.classList.toggle('maximized');
            
            // Toggle icon between maximize and restore down
            const icon = maximizeButton.querySelector('i');
            if (document.body.classList.contains('maximized')) {
                icon.classList.remove('fa-square');
                icon.classList.add('fa-clone');
            } else {
                icon.classList.remove('fa-clone');
                icon.classList.add('fa-square');
            }
        });
    }
    
    // Add click event listeners to tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            activateTab(tabId);
        });
    });
    
    // Add click event listeners to files in sidebar
    files.forEach(file => {
        file.addEventListener('click', () => {
            const fileId = file.getAttribute('data-file');
            activateTab(fileId);
        });
    });
    
    // Tab functionality is now simplified - tabs cannot be closed
    
    // Activity bar functionality
    activityIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const section = icon.getAttribute('data-section');
            
            // Update active icon
            activityIcons.forEach(i => i.classList.remove('active'));
            icon.classList.add('active');
            
            // Show/hide sidebar based on which icon is clicked
            if (section === 'explorer') {
                if (window.innerWidth <= 576 && sidebarVisible) {
                    // On mobile, toggle the sidebar
                    hideSidebar();
                } else {
                    showSidebar();
                }
            } else {
                hideSidebar();
            }
        });
    });
    
    // Fade-in animation for the about section
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
        // Add animation class on first load
        const hasAnimated = sessionStorage.getItem('hasAnimated');
        if (!hasAnimated) {
            aboutSection.style.opacity = '0';
            setTimeout(() => {
                aboutSection.style.transition = 'opacity 1s ease-in-out';
                aboutSection.style.opacity = '1';
            }, 300);
            sessionStorage.setItem('hasAnimated', 'true');
        }
    }
    
    // Cursor code removed
    
    // Contact form handling with Web3Forms
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Send form data to Web3Forms
            fetch(contactForm.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Show success message
                formStatus.style.display = 'block';
                
                if (data.success) {
                    // Show success message
                    formSuccess.style.display = 'block';
                    formError.style.display = 'none';
                    
                    // Reset form
                    contactForm.reset();
                } else {
                    // Show error message
                    formSuccess.style.display = 'none';
                    formError.style.display = 'block';
                    formError.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${data.message || 'Something went wrong!'}`;
                }
                
                // Reset button
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                
                // Hide status after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                    formSuccess.style.display = 'none';
                    formError.style.display = 'none';
                }, 5000);
            })
            .catch(error => {
                // Show error message
                formStatus.style.display = 'block';
                formSuccess.style.display = 'none';
                formError.style.display = 'block';
                formError.innerHTML = `<i class="fas fa-exclamation-circle"></i> Network error: ${error.message}`;
                
                // Reset button
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
    
    // Add a MutationObserver to ensure sidebar stays visible when needed
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target === sidebar && 
                mutation.type === 'attributes' && 
                mutation.attributeName === 'style') {
                
                const explorerActive = explorerIcon.classList.contains('active');
                if (explorerActive && sidebar.style.display === 'none') {
                    sidebar.style.display = 'block';
                    sidebar.style.visibility = 'visible';
                    sidebar.style.opacity = '1';
                }
            }
        });
    });
    
    // Start observing the sidebar for style changes
    if (sidebar) {
        observer.observe(sidebar, { attributes: true });
    }
    
    // Add event listener for window resize to ensure sidebar visibility
    window.addEventListener('resize', () => {
        if (explorerIcon.classList.contains('active') && sidebar) {
            const sidebarContainer = document.querySelector('.sidebar-container');
            if (window.innerWidth <= 576) {
                if (sidebarVisible) {
                    sidebarContainer.classList.add('visible');
                } else {
                    sidebarContainer.classList.remove('visible');
                }
            } else {
                if (sidebarVisible) {
                    sidebar.style.display = 'block';
                    sidebar.style.visibility = 'visible';
                    sidebar.style.opacity = '1';
                } else {
                    sidebar.style.display = 'none';
                }
            }
        }
    });
    
    // Add a periodic check to ensure sidebar is visible
    setInterval(() => {
        if (explorerIcon && explorerIcon.classList.contains('active') && sidebar && sidebarVisible) {
            const sidebarContainer = document.querySelector('.sidebar-container');
            if (window.innerWidth <= 576) {
                if (!sidebarContainer.classList.contains('visible')) {
                    sidebarContainer.classList.add('visible');
                }
            } else {
                if (sidebar.style.display === 'none' || 
                    getComputedStyle(sidebar).display === 'none' ||
                    getComputedStyle(sidebar).visibility === 'hidden' ||
                    getComputedStyle(sidebar).opacity === '0') {
                    
                    sidebar.style.display = 'block';
                    sidebar.style.visibility = 'visible';
                    sidebar.style.opacity = '1';
                }
            }
        }
    }, 500);
    
    // Add click event listener to close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 576 && sidebarVisible) {
            // Check if click is outside sidebar and activity bar
            const sidebarContainer = document.querySelector('.sidebar-container');
            const activityBar = document.querySelector('.activity-bar');
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            
            if (!sidebarContainer.contains(e.target) && 
                !activityBar.contains(e.target) && 
                !mobileMenuToggle.contains(e.target)) {
                hideSidebar();
            }
        }
    });
    
    // Close sidebar after clicking a file on mobile
    if (window.innerWidth <= 576) {
        files.forEach(file => {
            file.addEventListener('click', () => {
                setTimeout(() => {
                    hideSidebar();
                }, 300);
            });
        });
    }
    
    // Check if there's a hash in the URL to activate the correct tab
    function checkUrlHash() {
        const hash = window.location.hash.substring(1);
        if (hash && hash.includes('-section')) {
            const tabId = hash.replace('-section', '');
            activateTab(tabId);
        } else {
            // Default to about tab
            activateTab('about');
        }
    }
    
    // Initialize with the correct tab based on URL hash
    checkUrlHash();
    
    // Listen for hash changes
    window.addEventListener('hashchange', checkUrlHash);
    
    // Add touch swipe functionality for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        if (window.innerWidth <= 576) {
            // Swipe right to show sidebar
            if (touchEndX - touchStartX > 100 && !sidebarVisible) {
                showSidebar();
            }
            
            // Swipe left to hide sidebar
            if (touchStartX - touchEndX > 100 && sidebarVisible) {
                hideSidebar();
            }
        }
    }
    
    // Fix for iOS vh units issue
    function setVhProperty() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVhProperty();
    window.addEventListener('resize', setVhProperty);
});
