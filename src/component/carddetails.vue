 <template>
    <section id="program">
        <div class="banner fade-section">
            <h1>Upcoming <span>Courses</span></h1>
            <p class="days">Monday to Saturday</p>
            <div class="slots">
                <span>9am – 12pm</span>
                <span class="divider"></span>
                <span>12pm – 3pm</span>
                <span class="divider"></span>
                <span>3pm – 6pm</span>
            </div>
        </div>
    <div id="pro-data">
        <div class="container-fluid mt-5 mb-5 " id="pro-det">
            <div class="container my-0 course-btn-wrap ">
                <div class="course-grid">
                    <button class="view-btn slide-left" data-course="basic-computer">Basic Computer Training</button>
                    <button class="view-btn slide-left" data-course="fullstack">Full Stack Development</button>
                    <button class="view-btn slide-left" data-course="qa-tab">QA Testing</button>
                    <button class="view-btn slide-left" data-course="uiux">UI/UX Design</button>
                    <button class="view-btn slide-left" data-course="data">Data Analytics</button>
                    <button class="view-btn slide-right" data-course="ba-pm">Business Analysis</button>
                    <button class="view-btn slide-right" data-course="cloud-devops">Cloud Computing & DevOps</button>
                    <button class="view-btn slide-right" data-course="mobile-dev">Mobile App Development</button>
                    <button class="view-btn slide-right" data-course="ai-ml">AI & Machine Learning</button>
                    <button class="view-btn slide-right" data-course="comm-leadership">Communication & Leadership</button>
                </div>
            </div>
        </div>
        <!--CARD SECTION FOR DETAILS START -->
        <div class="container info-details " id="basic-computer">
            <div class="row">
                <div class="col-lg-9 card-details">
                    <div class="left-side-data">
                        <h2><i class="bi bi-pc-display"></i>
                        Basic Computer Training</h2>
                        <h6 class="mx-4">Beginner to Advance</h6>
                    </div>
                    <p>Learn computer fundamentals, MS Office and internet skills essential for any job or business</p>
                    <div class="main-box-container">

                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-clock"></i>
                            </div>
                            <div class="data">
                                <h5>6 Months</h5>
                                <p>Duration</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-award"></i>
                            </div>
                            <div class="data">
                                <h5>Certificate</h5>
                                <p>Provided</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-briefcase"></i>
                            </div>
                            <div class="data">
                                <h5>Internship</h5>
                                <p>Opportunity</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-people"></i>
                            </div>
                            <div class="data">
                                <h5>Placement</h5>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="right-data">
                        <h4 class="mb-4">4,500<span class="text-muted">/month</span></h4>
                        <button>Apply Now <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="container info-detail" id="basic-section">
                <!-- Buttons -->
                <div class="my-3 commn">
                    <button @click="showCourse('basic-all')">All</button>
                    <button @click="showCourse('basic-3')">3 Month</button>
                    <button @click="showCourse('basic-6')">6 Month</button>
                    <button @click="showCourse('basic-12')">12 Month</button>
                </div>
                <!-- ALL -->
                <div class="course-section" id="basic-all">
                    <h6 class="text-white mt-2 fs-4">What you'll Learn (All Modules)</h6>
                    <div class="row">
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Computer Basics</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Computer Fundamentals</h6>
                                    <!-- <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Operating System (Windows)</h6> -->
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> File Management</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Keyboard & Typing Skills</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Hardware & Software Basics</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>MS Office</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> MS Word</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> MS Excel</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> MS PowerPoint</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> MS Outlook</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Document Formatting</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Internet & Email</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Internet Browsing</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Email Writing & Etiquette</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Google Workspace</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Online Safety Basics</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Cloud Storage (Drive)</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Practical Skills</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Resume Making</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Printer & Scanner Use</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Basic Troubleshooting</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Data Entry Basics</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Video Calling Tools</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 3 MONTH -->
                <div class="course-section" id="basic-3" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">3 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Computer Fundamentals</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Introduction to Computers</li>
                                        <li>Windows OS Basics</li>
                                        <li>Typing Practice</li>
                                        <li>File & Folder Management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 6 MONTH -->
                <div class="course-section" id="basic-6" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">6 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>MS Office & Internet</h5>
                                <div class="Modules-info">
                                <ul>
                                        <li>MS Word & Excel</li>
                                        <li>MS PowerPoint</li>
                                        <li>Internet & Email Basics</li>
                                        <li>Google Workspace</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 12 MONTH -->
                <div class="course-section" id="basic-12" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">12 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Advanced Office Skills</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Advanced Excel (Formulas/Pivot)</li>
                                        <li>Resume & Document Designing</li>
                                        <li>Data Entry Projects</li>
                                        <li>Job-Ready Computer Skills</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--CARD SECTION FOR DETAILS START 1-->

        <!--CARD SECTION FOR DETAILS START 2-->
        <div class="container info-details" id="fullstack">
            <div class="row">
                <div class="col-lg-9 card-details" >
                    <div class="left-side-data ">
                        <h2><i class="bi bi-code-slash"></i>
                        Full stack Development</h2>
                        <h6 class="mx-4">Beginner to Advance</h6>
                    </div>
                    <p>Master end-to-end web development with hands-on-projects in modern front-end and back-end technology</p>
                    <div class="main-box-container ">

                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-clock"></i>
                            </div>
                            <div class="data">
                                <h5>6 Months</h5>
                                <p>Duration</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-award"></i>
                            </div>
                            <div class="data">
                                <h5>Certificate</h5>
                                <p>Provided</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-briefcase"></i>
                            </div>
                            <div class="data">
                                <h5>Internship</h5>
                                <p>Opportunity</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-people"></i>
                            </div>
                            <div class="data">
                                <h5>Placement</h5>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="right-data">
                        <h4  class="mb-4">4,500<span class="text-muted">/month</span></h4>
                        <button>Apply Now <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>           
            <div class="container info-detail" id="fullstack-section">
                <!-- Buttons -->
                <div class=" my-3 commn">
                    <button @click="showCourse('fullstack-all')">All</button>
                    <button @click="showCourse('fullstack-3')">3 Month</button>
                    <button @click="showCourse('fullstack-6')">6 Month</button>
                    <button @click="showCourse('fullstack-12')">12 Month</button>
                </div>
                <!-- ALL -->
                <div class="course-section" id="fullstack-all">
                    <h6 class="text-white mt-2 fs-4">What you'll Learn (All Modules)</h6>
                    <div class="row">
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5 >Frontend Development</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> HTML5</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> CSS3</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> bootstrap 5</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> JavaScript (ES6+)</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Responsive Design</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Backend Development</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Core Java/VUE.js</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Express.js</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> REST API</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Authentication (JWT)</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> MVC Architecture</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Database</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> MySQL</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> MongoDB</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Database Design</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> CRUD Operations</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> PostgreSQL</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Tools & Technology</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Git & GitHub</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Postman</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> VS Code</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Cloud Development</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Netlify</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 3 MONTH -->
                <div class="course-section" id="fullstack-3" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">3 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>QA Basics</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Introduction to Testing</li>
                                        <li>SDLC Basics</li>
                                        <li>Manual Testing Concepts</li>
                                        <li>Test Case Writing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 6 MONTH -->
                <div class="course-section" id="fullstack-6" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">6 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>QA / Manual Testing</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>STLC Process</li>
                                        <li>Test Scenarios</li>
                                        <li>Bug Reporting (JIRA)</li>
                                        <li>API Testing (Postman)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 12 MONTH -->
                <div class="course-section" id="fullstack-12" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">12 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Automation QA</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Selenium Basics</li>
                                        <li>TestNG / JUnit</li>
                                        <li>Automation Framework</li>
                                        <li>CI/CD Basics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>   
        </div>  
        <!--CARD SECTION FOR DETAILS END 2-->

    <!--CARD SECTION FOR DETAILS START -3-->
        <div class="container info-details" id="qa-tab">
            <div class="row">
                <div class="col-lg-9 card-details">
                    <div class="left-side-data">
                        <h2>
                            <i class="bi bi-bug-fill"></i>
                            QA Testing
                        </h2>
                        <h6 class="mx-4">Beginner to Advanced</h6>
                    </div>
                    <p>Learn Manual and Automation Testing with real-world projects, industry-standard tools, and practical testing methodologies.</p>
                    <div class="main-box-container">
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-calendar-check"></i>
                            </div>
                            <div class="data">
                                <h5>4 Months</h5>
                                <p>Duration</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-briefcase"></i>
                            </div>
                            <div class="data">
                                <h5>Internship</h5>
                                <p>Opportunity</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-people"></i>
                            </div>
                            <div class="data">
                                <h5>Placement</h5>
                                <p>Support</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-award"></i>
                            </div>
                            <div class="data">
                                <h5>Certificate</h5>
                                <p>Provided</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="right-data">
                        <h4 class="mb-4">3,500<span class="text-muted">/month</span></h4>
                        <button>Apply Now <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="container-fluid" id="qa-section">
                <div class=" my-3 commn">
                    <button @click="showCourse('qa-all')">All</button>
                    <button @click="showCourse('qa-3')">3 Month</button>
                    <button @click="showCourse('qa-6')">6 Month</button>
                    <button @click="showCourse('qa-12')">12 Month</button>
                </div>
                <div class="course-section" id="qa-all">
                    <h6 class="text-white mt-2 fs-4">What You'll Learn (All QA Modules)</h6>
                    <div class="row">
                        <!-- QA Basics -->
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>QA Fundamentals</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Software Testing Basics</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> SDLC & STLC</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Testing Principles</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Testing Types</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Test Case Writing</h6>
                                </div>
                            </div>
                        </div>
                        <!-- Manual Testing -->
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Manual Testing</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Functional Testing</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Smoke & Sanity Testing</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Regression Testing</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Integration Testing</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Bug Life Cycle (JIRA)</h6>
                                </div>
                            </div>
                        </div>
                        <!-- API + Automation Intro -->
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>API & Automation</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> REST API Testing</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Postman Tool</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> SQL Basics</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Selenium WebDriver</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Java Basics</h6>
                                </div>
                            </div>
                        </div>
                        <!-- Advanced QA -->
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Advanced QA & Tools</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> TestNG / JUnit</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Framework (POM)</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Maven</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Jenkins CI/CD</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Live Project</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="course-section" id="qa-3" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">3 Month QA Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>QA Basics</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Introduction to Software Testing</li>
                                        <li>SDLC & STLC Overview</li>
                                        <li>Software Testing Principles</li>
                                        <li>Testing Types (Manual Overview)</li>
                                        <li>Test Case Writing Basics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="course-section" id="qa-6" style="display:none;">
                    <h6 class="text-white mt-2 fs-4"> 6 Month Testing</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5> Manual Testing</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Functional Testing Basics</li>
                                        <li>Smoke & Sanity Testing</li>
                                        <li>Regression Testing Overview</li>
                                        <li>Defect Life Cycle</li>
                                        <li>Bug Reporting (Intro to JIRA)</li>
                                    </ul>
                                </div>
                            </div>  
                        </div>   
                    </div>
                </div>
                <div class="course-section" id="qa-12" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">12 Month Real Project</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Real Project Practice</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Live Website Testing</li>
                                        <li>Test Scenario Creation</li>
                                        <li>Bug Reporting Practice</li>
                                        <li>Manual Test Execution</li>
                                        <li>Interview Basics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- CARD SECTION FOR DETAILS END -3-->
    
    <!-- CARD SECTION FOR DETAILS START-4-->
        <div class="container info-details" id="uiux" >
            <div class="row">
                <div class="col-lg-9 card-details">
                    <div class="left-side-data">
                        <h2>
                            <i class="bi bi-palette"></i>
                            UI/UX Design
                        </h2>
                        <h6 class="mx-4">Beginner to Advanced</h6>
                    </div>
                    <p>Learn user-centered design principles, create engaging digital experiences, and build professional UI/UX portfolios with real-world projects.</p>
                    <div class="main-box-container">
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-calendar-check"></i>
                            </div>
                            <div class="data">
                                <h5>5 Months</h5>
                                <p>Duration</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-award"></i>
                            </div>
                            <div class="data">
                                <h5>Certificate</h5>
                                <p>Provided</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-briefcase"></i>
                            </div>
                            <div class="data">
                                <h5>Internship</h5>
                                <p>Opportunity</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-people"></i>
                            </div>
                            <div class="data">
                                <h5>Placement</h5>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="right-data">
                        <h4 class="mb-4">4,000<span class="text-muted">/month</span></h4>
                        <button>Apply Now <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="container-fluid" id="uiux-section">
                <div class=" my-3 commn">
                    <button @click="showCourse('uiux-all')">All</button>
                    <button @click="showCourse('uiux-3')">3 Month</button>
                    <button @click="showCourse('uiux-6')">6 Month</button>
                    <button @click="showCourse('uiux-12')">12 Month</button>
                </div>
                <!-- ALL -->
                <div class="course-section" id="uiux-all">
                    <h6 class="text-white mt-2 fs-4">What You'll Learn (All UI/UX Modules)</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>UI Design</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Design Principles</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Color Theory</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Typography</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Layout & Grids</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Design Systems</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>UX Design</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> User Research</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> User Personas</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> User Journey Mapping</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Information Architecture</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Usability Testing</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Wireframing & Prototyping</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Low-Fidelity Wireframes</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> High-Fidelity Designs</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Interactive Prototypes</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Design Validation</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> User Flows</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Tools & Software</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Figma</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Adobe XD</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Photoshop Basics</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Illustrator Basics</h6>
                                    <h6><i class="bi bi-check-circle-fill text-success"></i> Portfolio Design</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 3 MONTH -->
                <div class="course-section" id="uiux-3" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">3 Month UI/UX Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>UI/UX Basics</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Design Principles</li>
                                        <li>Color Theory</li>
                                        <li>Typography Basics</li>
                                        <li>Intro to User Research</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 6 MONTH -->
                <div class="course-section" id="uiux-6" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">6 Month UI/UX Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>UX Process & Wireframing</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>User Personas</li>
                                        <li>User Journey Mapping</li>
                                        <li>Low-Fidelity Wireframes</li>
                                        <li>Figma Basics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 12 MONTH -->
                <div class="course-section" id="uiux-12" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">12 Month UI/UX Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Advanced UI/UX & Portfolio</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>High-Fidelity Designs</li>
                                        <li>Interactive Prototypes</li>
                                        <li>Design Systems</li>
                                        <li>Adobe XD / Illustrator</li>
                                        <li>Portfolio Building</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- CARD SECTION FOR DETAILS END-4-->

        <!-- CARD SECTION FOR DETAILS START-5-->
        <div class="container info-details" id="data"  >
            <div class="row">
                <div class="col-lg-9 card-details">
                    <div class="left-side-data">
                        <h2>
                            <i class="bi bi-bar-chart-line"></i>
                            Data Analytics
                        </h2>
                        <h6 class="mx-4">Beginner to Advanced</h6>
                    </div>
                    <p>Learn how to analyze data, create meaningful insights, and build data-driven decisions using industry-standard tools and techniques.</p>
                    <div class="main-box-container">
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-clock"></i>
                            </div>
                            <div class="data">
                                <h5>5 Months</h5>
                                <p>Duration</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-graph-up"></i>
                            </div>
                            <div class="data">
                                <h5>Real Projects</h5>
                                <p>Business Insights</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-people"></i>
                            </div>
                            <div class="data">
                                <h5>Placement</h5>
                                <p>Support</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-award"></i>
                            </div>
                            <div class="data">
                                <h5>Certificate</h5>
                                <p>Provided</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="right-data">
                        <h4 class="mb-4">4,200<span class="text-muted">/month</span></h4>
                        <button>Apply Now <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="container-fluid" id="data-section">
                <div class=" my-3 commn">
                    <button @click="showCourse('data-all')">All</button>
                    <button @click="showCourse('data-3')">3 Month</button>
                    <button @click="showCourse('data-6')">6 Month</button>
                    <button @click="showCourse('data-12')">12 Month</button>
                </div>
                <!-- ALL -->
                <div class="course-section" id="data-all">
                    <h6 class="text-white mt-2 fs-4">What You'll Learn (All Data Analytics Modules)</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Excel for Data Analysis</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Excel Functions</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Pivot Tables</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Charts & Dashboards</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Data Cleaning</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Reporting</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>SQL for Data</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Database Queries</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Joins</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Aggregations</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Data Filtering</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Data Modeling</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Data Visualization</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Power BI</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Tableau</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Dashboard Design</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Storytelling with Data</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> KPI Reporting</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Python for Data Analytics</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Python Basics</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Pandas</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> NumPy</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Data Cleaning</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Data Analysis Projects</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 3 MONTH -->
                <div class="course-section" id="data-3" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">3 Month Data Analytics Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Excel Basics</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Excel Functions</li>
                                        <li>Pivot Tables</li>
                                        <li>Basic Charts</li>
                                        <li>Data Cleaning Basics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 6 MONTH -->
                <div class="course-section" id="data-6" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">6 Month Data Analytics Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>SQL & Visualization</h5>
                            <div class="Modules-info">
                                    <ul>
                                        <li>Database Queries</li>
                                        <li>Joins & Aggregations</li>
                                        <li>Power BI Basics</li>
                                        <li>Dashboard Design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 12 MONTH -->
                <div class="course-section" id="data-12" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">12 Month Data Analytics Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Python & Live Projects</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Python Basics</li>
                                        <li>Pandas & NumPy</li>
                                        <li>Tableau</li>
                                        <li>KPI Reporting</li>
                                        <li>Live Data Analysis Project</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--CARD SECTION FOR DETAILS START-5-->

        <!--CARD SECTION FOR DETAILS START-6-->
        <div class="container info-details" id="ba-pm">
            <div class="row">
                <div class="col-lg-9 card-details">
                    <div class="left-side-data">
                        <h2><i class="bi bi-clipboard-data"></i>
                        Business Analysis </h2>
                        <h6 class="mx-4">Beginner to Advance</h6>
                    </div>
                    <p>Learn how businesses identify problems, gather requirements and build successful products from idea to launch</p>
                    <div class="main-box-container">

                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-clock"></i>
                            </div>
                            <div class="data">
                                <h5>6 Months</h5>
                                <p>Duration</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-award"></i>
                            </div>
                            <div class="data">
                                <h5>Certificate</h5>
                                <p>Provided</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-briefcase"></i>
                            </div>
                            <div class="data">
                                <h5>Internship</h5>
                                <p>Opportunity</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-people"></i>
                            </div>
                            <div class="data">
                                <h5>Placement</h5>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="right-data">
                        <h4 class="mb-4">4,500<span class="text-muted">/month</span></h4>
                        <button>Apply Now <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="container info-detail" id="ba-section">
                <!-- Buttons -->
                <div class="my-3 commn">
                    <button @click="showCourse('ba-all')">All</button>
                    <button @click="showCourse('ba-3')">3 Month</button>
                    <button @click="showCourse('ba-6')">6 Month</button>
                    <button @click="showCourse('ba-12')">12 Month</button>
                </div>

                <!-- ALL -->
                <div class="course-section" id="ba-all">
                    <h6 class="text-white mt-2 fs-4">What you'll Learn (All Modules)</h6>
                    <div class="row">
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Business Analysis Basics</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Requirement Elicitation</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> BRD & SRS Writing</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Stakeholder Analysis</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Process Mapping (BPMN)</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Gap Analysis</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Product Management</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Product Lifecycle</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Roadmap Planning</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Market & Competitor Research</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> MVP Strategy</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Go-To-Market Strategy</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Agile & Frameworks</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Scrum Framework</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> User Stories & Backlog</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Sprint Planning</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Kanban Basics</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> JIRA & Confluence</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Tools & Data</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Excel for BA</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> SQL Basics</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Figma Wireframing</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> KPIs & Metrics</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> A/B Testing Basics</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 3 MONTH -->
                <div class="course-section" id="ba-3" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">3 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>BA Fundamentals</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Introduction to Business Analysis</li>
                                        <li>Requirement Gathering Basics</li>
                                        <li>Stakeholder Communication</li>
                                        <li>Process Mapping Intro</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 6 MONTH -->
                <div class="course-section" id="ba-6" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">6 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>BA + Agile Tools</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>BRD / SRS Documentation</li>
                                        <li>Agile & Scrum Basics</li>
                                        <li>JIRA & Confluence</li>
                                        <li>User Story Writing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 12 MONTH -->
                <div class="course-section" id="ba-12" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">12 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Product Management & Strategy</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Product Roadmapping</li>
                                        <li>Market & Competitor Research</li>
                                        <li>Go-To-Market Strategy</li>
                                        <li>Data-Driven Decision Making</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--CARD SECTION FOR DETAILS END-6-->

        <!--CARD SECTION FOR DETAILS START-7-->
        <div class="container info-details" id="cloud-devops">
            <div class="row">
                <div class="col-lg-9 card-details">
                    <div class="left-side-data">
                        <h2><i class="bi bi-cloud-arrow-up"></i>
                        Cloud Computing & DevOps</h2>
                        <h6 class="mx-4">Beginner to Advance</h6>
                    </div>
                    <p>Learn cloud infrastructure, automation and deployment pipelines used by modern tech companies</p>
                    <div class="main-box-container">

                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-clock"></i>
                            </div>
                            <div class="data">
                                <h5>6 Months</h5>
                                <p>Duration</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-award"></i>
                            </div>
                            <div class="data">
                                <h5>Certificate</h5>
                                <p>Provided</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-briefcase"></i>
                            </div>
                            <div class="data">
                                <h5>Internship</h5>
                                <p>Opportunity</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-people"></i>
                            </div>
                            <div class="data">
                                <h5>Placement</h5>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="right-data">
                        <h4 class="mb-4">4,500<span class="text-muted">/month</span></h4>
                        <button>Apply Now <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="container info-detail" id="cloud-section">
                <!-- Buttons -->
                <div class="my-3 commn">
                    <button @click="showCourse('cloud-all')">All</button>
                    <button @click="showCourse('cloud-3')">3 Month</button>
                    <button @click="showCourse('cloud-6')">6 Month</button>
                    <button @click="showCourse('cloud-12')">12 Month</button>
                </div>
                <!-- ALL -->
                <div class="course-section" id="cloud-all">
                    <h6 class="text-white mt-2 fs-4">What you'll Learn (All Modules)</h6>
                    <div class="row">
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Cloud Fundamentals</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> AWS Core Services</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> EC2 & S3</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> IAM & Security</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> VPC Networking</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Cloud Architecture</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>DevOps Tools</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Git & GitHub</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Jenkins CI/CD</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Docker</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Kubernetes</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Ansible Basics</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Infrastructure as Code</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Terraform Basics</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> CloudFormation</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Configuration Management</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Auto Scaling</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Load Balancing</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Monitoring & Security</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> CloudWatch / Grafana</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Linux Server Admin</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Shell Scripting</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> DevSecOps Basics</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Incident Response</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 3 MONTH -->
                <div class="course-section" id="cloud-3" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">3 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Cloud Basics</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Introduction to Cloud Computing</li>
                                        <li>AWS Console Basics</li>
                                        <li>Linux Fundamentals</li>
                                        <li>Networking Basics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 6 MONTH -->
                <div class="course-section" id="cloud-6" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">6 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>DevOps Core</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Docker & Containers</li>
                                        <li>CI/CD with Jenkins</li>
                                        <li>Git Workflows</li>
                                        <li>Basic Kubernetes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 12 MONTH -->
                <div class="course-section" id="cloud-12" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">12 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Advanced Cloud & Automation</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Terraform & IaC</li>
                                        <li>Kubernetes Orchestration</li>
                                        <li>Cloud Security</li>
                                        <li>Production Deployments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--CARD SECTION FOR DETAILS END-7-->

        <!--CARD SECTION FOR DETAILS START-8-->
        <div class="container info-details" id="mobile-dev">
            <div class="row">
                <div class="col-lg-9 card-details">
                    <div class="left-side-data">
                        <h2><i class="bi bi-phone"></i>
                        Mobile App Development</h2>
                        <h6 class="mx-4">Beginner to Advance</h6>
                    </div>
                    <p>Build native and cross-platform mobile apps for Android & iOS with real-world projects</p>
                    <div class="main-box-container">

                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-clock"></i>
                            </div>
                            <div class="data">
                                <h5>6 Months</h5>
                                <p>Duration</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-award"></i>
                            </div>
                            <div class="data">
                                <h5>Certificate</h5>
                                <p>Provided</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-briefcase"></i>
                            </div>
                            <div class="data">
                                <h5>Internship</h5>
                                <p>Opportunity</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-people"></i>
                            </div>
                            <div class="data">
                                <h5>Placement</h5>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="right-data">
                        <h4 class="mb-4">4,500<span class="text-muted">/month</span></h4>
                        <button>Apply Now <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="container info-detail" id="mobile-section">
                <!-- Buttons -->
                <div class="my-3 commn">
                    <button @click="showCourse('mob-all')">All</button>
                    <button @click="showCourse('mob-3')">3 Month</button>
                    <button @click="showCourse('mob-6')">6 Month</button>
                    <button @click="showCourse('mob-12')">12 Month</button>
                </div>
                <!-- ALL -->
                <div class="course-section" id="mob-all">
                    <h6 class="text-white mt-2 fs-4">What you'll Learn (All Modules)</h6>
                    <div class="row">
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Mobile Dev Basics</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Dart / JavaScript</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Flutter Widgets</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> React Native Basics</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> UI/UX for Mobile</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Responsive Layouts</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>App Functionality</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Navigation & Routing</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> State Management</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> REST API Integration</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Local Storage</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Push Notifications</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Backend & Database</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Firebase</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Authentication</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Cloud Firestore</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Realtime Database</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> API Hosting</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Deployment & Tools</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Play Store Publishing</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> App Store Publishing</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> App Testing & Debugging</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Performance Optimization</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Version Control</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 3 MONTH -->
                <div class="course-section" id="mob-3" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">3 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Mobile Dev Fundamentals</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Introduction to Mobile Apps</li>
                                        <li>Flutter / React Native Basics</li>
                                        <li>UI Design Basics</li>
                                        <li>Simple App Building</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 6 MONTH -->
                <div class="course-section" id="mob-6" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">6 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Cross-Platform Apps</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>State Management</li>
                                        <li>API Integration</li>
                                        <li>Firebase Basics</li>
                                        <li>App Testing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 12 MONTH -->
                <div class="course-section" id="mob-12" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">12 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Advanced App Development</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Advanced State Management</li>
                                        <li>Play Store / App Store Deployment</li>
                                        <li>Performance Optimization</li>
                                        <li>Real-world Live Project</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--CARD SECTION FOR DETAILS END-8-->

        <!--CARD SECTION FOR DETAILS START-9-->
        <div class="container info-details" id="ai-ml">
            <div class="row">
                <div class="col-lg-9 card-details">
                    <div class="left-side-data">
                        <h2><i class="bi bi-cpu"></i>
                        AI & Machine Learning</h2>
                        <h6 class="mx-4">Beginner to Advance</h6>
                    </div>
                    <p>Learn Python, machine learning algorithms and real-world AI projects from scratch</p>
                    <div class="main-box-container">

                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-clock"></i>
                            </div>
                            <div class="data">
                                <h5>6 Months</h5>
                                <p>Duration</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-award"></i>
                            </div>
                            <div class="data">
                                <h5>Certificate</h5>
                                <p>Provided</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-briefcase"></i>
                            </div>
                            <div class="data">
                                <h5>Internship</h5>
                                <p>Opportunity</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-people"></i>
                            </div>
                            <div class="data">
                                <h5>Placement</h5>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="right-data">
                        <h4 class="mb-4">4,500<span class="text-muted">/month</span></h4>
                        <button>Apply Now <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="container info-detail" id="ai-section">
                <!-- Buttons -->
                <div class="my-3 commn">
                    <button @click="showCourse('ai-all')">All</button>
                    <button @click="showCourse('ai-3')">3 Month</button>
                    <button @click="showCourse('ai-6')">6 Month</button>
                    <button @click="showCourse('ai-12')">12 Month</button>
                </div>
                <!-- ALL -->
                <div class="course-section" id="ai-all">
                    <h6 class="text-white mt-2 fs-4">What you'll Learn (All Modules)</h6>
                    <div class="row">
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Python for AI</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Python Basics</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> NumPy & Pandas</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Data Visualization</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Statistics for ML</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Linear Algebra Basics</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Machine Learning</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Supervised Learning</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Unsupervised Learning</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Regression & Classification</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Model Evaluation</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Scikit-Learn</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Deep Learning</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Neural Networks</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> TensorFlow / Keras</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> CNN for Images</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> NLP Basics</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Model Training</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Real-world AI Projects</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Chatbot Development</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Image Classification</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Recommendation Systems</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Model Deployment</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> AI Ethics Basics</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 3 MONTH -->
                <div class="course-section" id="ai-3" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">3 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>AI Fundamentals</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Introduction to AI & ML</li>
                                        <li>Python Basics</li>
                                        <li>Data Handling</li>
                                        <li>Basic Algorithms</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 6 MONTH -->
                <div class="course-section" id="ai-6" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">6 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>ML & Model Building</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Supervised Learning</li>
                                        <li>Model Evaluation</li>
                                        <li>Scikit-Learn Projects</li>
                                        <li>Data Preprocessing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 12 MONTH -->
                <div class="course-section" id="ai-12" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">12 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Deep Learning & Deployment</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Neural Networks</li>
                                        <li>TensorFlow Projects</li>
                                        <li>Model Deployment</li>
                                        <li>Capstone AI Project</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--CARD SECTION FOR DETAILS END-9-->

        <!--CARD SECTION FOR DETAILS START-10-->
        <div class="container info-details" id="comm-leadership">
            <div class="row">
                <div class="col-lg-9 card-details">
                    <div class="left-side-data">
                        <h2><i class="bi bi-mic"></i>
                        Communication & Leadership</h2>
                        <h6 class="mx-4">Beginner to Advance</h6>
                    </div>
                    <p>Build confident communication, public speaking and leadership skills for the modern workplace</p>
                    <div class="main-box-container">

                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-clock"></i>
                            </div>
                            <div class="data">
                                <h5>6 Months</h5>
                                <p>Duration</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-award"></i>
                            </div>
                            <div class="data">
                                <h5>Certificate</h5>
                                <p>Provided</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-briefcase"></i>
                            </div>
                            <div class="data">
                                <h5>Internship</h5>
                                <p>Opportunity</p>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="icone p-2">
                                <i class="bi bi-people"></i>
                            </div>
                            <div class="data">
                                <h5>Placement</h5>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="right-data">
                        <h4 class="mb-4">4,500<span class="text-muted">/month</span></h4>
                        <button>Apply Now <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="container info-detail" id="comm-section">
                <!-- Buttons -->
                <div class="my-3 commn">
                    <button @click="showCourse('comm-all')">All</button>
                    <button @click="showCourse('comm-3')">3 Month</button>
                    <button @click="showCourse('comm-6')">6 Month</button>
                    <button @click="showCourse('comm-12')">12 Month</button>
                </div>
                <!-- ALL -->
                <div class="course-section" id="comm-all">
                    <h6 class="text-white mt-2 fs-4">What you'll Learn (All Modules)</h6>
                    <div class="row">
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Communication Basics</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Verbal Communication</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Business Writing</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Email Etiquette</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Active Listening</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Body Language</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Public Speaking</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Presentation Skills</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Overcoming Stage Fear</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Storytelling Techniques</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Voice Modulation</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Audience Engagement</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Leadership Skills</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Team Management</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Decision Making</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Conflict Resolution</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Emotional Intelligence</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Time Management</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="course-modules px-3 py-3">
                                <h5>Workplace Readiness</h5>
                                <div class="Modules-info">
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Interview Skills</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Resume Building</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Group Discussions</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Professional Etiquette</h6>
                                    <h6><i class="bi bi-check-circle-fill" style="color: green;"></i> Networking Skills</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 3 MONTH -->
                <div class="course-section" id="comm-3" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">3 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Communication Foundations</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Verbal & Non-verbal Skills</li>
                                        <li>Email & Business Etiquette</li>
                                        <li>Active Listening Basics</li>
                                        <li>Confidence Building</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 6 MONTH -->
                <div class="course-section" id="comm-6" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">6 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Public Speaking & Soft Skills</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Presentation Skills</li>
                                        <li>Group Discussions</li>
                                        <li>Interview Preparation</li>
                                        <li>Storytelling Techniques</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 12 MONTH -->
                <div class="course-section" id="comm-12" style="display:none;">
                    <h6 class="text-white mt-2 fs-4">12 Month Course Modules</h6>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="course-modules px-3 py-3">
                                <h5>Leadership & Team Management</h5>
                                <div class="Modules-info">
                                    <ul>
                                        <li>Conflict Resolution</li>
                                        <li>Decision Making</li>
                                        <li>Emotional Intelligence</li>
                                        <li>Leading Teams Effectively</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
        <!--CARD SECTION FOR DETAILS END-10-->

        <!-- ALL END CARD -->

        <!-- BUIL UP START -->
        <section class="journey-section fade-section">
            <div class="journey-container">
                <h5 class="journey-title">Your Journey With Us</h5>
                <div class="journey-grid">
                <!-- ENROLL -->
                <div class="journey-item">
                    <div class="journey-step">
                    <div class="icon-circle enroll">
                        <i class="bi bi-person-plus-fill"></i>
                    </div>
                    <h6>Enroll</h6>
                    </div>
                    <div class="journey-arrow">
                    <i class="bi bi-arrow-right"></i>
                    </div>
                </div>
                <!-- TRAINING -->
                <div class="journey-item">
                    <div class="journey-step">
                    <div class="icon-circle training">
                        <i class="bi bi-book-fill"></i>
                    </div>
                    <h6>Training</h6>
                    </div>
                    <div class="journey-arrow">
                    <i class="bi bi-arrow-right"></i>
                    </div>
                </div>
                <!-- LIVE PROJECT -->
                <div class="journey-item">
                    <div class="journey-step">
                    <div class="icon-circle project">
                        <i class="bi bi-code-slash"></i>
                    </div>
                    <h6>Live Project</h6>
                    </div>
                    <div class="journey-arrow">
                    <i class="bi bi-arrow-right"></i>
                    </div>
                </div>
                <!-- INTERNSHIP -->
                <div class="journey-item">
                    <div class="journey-step">
                    <div class="icon-circle internship">
                        <i class="bi bi-briefcase-fill"></i>
                    </div>
                    <h6>Internship</h6>
                    </div>
                    <div class="journey-arrow">
                    <i class="bi bi-arrow-right"></i>
                    </div>
                </div>
                <!-- INTERVIEW -->
                <div class="journey-item">
                    <div class="journey-step">
                    <div class="icon-circle interview">
                        <i class="bi bi-person-workspace"></i>
                    </div>
                    <h6>Interview</h6>
                    </div>
                    <div class="journey-arrow">
                    <i class="bi bi-arrow-right"></i>
                    </div>
                </div>
                <!-- PLACEMENT -->
                <div class="journey-item">
                    <div class="journey-step">
                    <div class="icon-circle placement">
                        <i class="bi bi-trophy-fill"></i>
                    </div>
                    <h6>Placement</h6>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <!-- BUIL UP START -->
</template>

<script>
export default {
  methods: {
    showCourse(type) {
      // Hide all sections
      document.querySelectorAll(".course-section").forEach(section => {
        section.style.display = "none";
      });
      let active = document.getElementById(type);
      if (active) {
        active.style.display = "block";
      }
    }
  },

  mounted() {
    // Animation
    let elements = document.querySelectorAll(
      ".fade-section, .slide-left, .slide-right"
    );
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
    elements.forEach((el) => observer.observe(el));
    [
      "basic-all",
      "fullstack-all",
      "qa-all",
      "uiux-all",
      "data-all",
      "ba-all",
      "cloud-all",
      "mob-all",
      "ai-all",
      "comm-all",
    ].forEach((id) => {
      let el = document.getElementById(id);
      if (el) {
        el.style.display = "block";
      }
    });
    document.querySelectorAll(".view-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        let course = btn.dataset.course;

        document.querySelectorAll(".info-details").forEach((section) => {
          section.style.display = "none";
        });

        let activeSection = document.getElementById(course);
        if (activeSection) {
          activeSection.style.display = "block";
        }
      });
    });
  }
};
</script>

<style>
 
  .banner {
    width: 100%;
    min-height: 220px;
    background-color: #051321;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px 20px;
    box-sizing: border-box;
   
  }

  .banner h1 {
    margin: 0 0 16px 0;
    font-size: 42px;
    font-weight: 500;
    color: white;
  }

  .banner h1 span {
    color: #4a9eed;
  }

  .banner .days {
    margin: 0 0 20px 0;
    font-size: 16px;
    color: #c3d3e8;
  }

  .banner .slots {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 15px;
    color: #8fabc9;
  }

  .banner .slots .divider {
    width: 1px;
    height: 14px;
    background: #3a5b82;
  }

  @media (max-width: 600px) {
    .banner h1 {
      font-size: 30px;
    }
    .banner .slots {
      flex-direction: column;
      gap: 8px;
    }
    .banner .slots .divider {
      display: none;
    }
  }
 
.card{
    border-radius: 10px;
    border: 2px solid #1e88e5 ;
    /* background: linear-gradient(145deg, #0F2D5C, #1B3E74); */
    /* border-bottom:2px solid white ; */
    transition: 0.3s ease;
}
.card:hover{
    /* border: 2px solid #1e88e5; */
    box-shadow: 0 5px 10px rgba(30, 136, 229, 0.25);
}

.course-card {
    border: none;
    border-radius: 16px;
   
    /* box-shadow: 0 8px 25px rgba(0,0,0,0.06); */
    transition: 0.3s ease;
    text-align: center;
    height:fit-content;
    display:flex;
    flex-direction:column;
}



.icone {
    width: 50px;
    height: 50px;
    margin: 0 auto 15px;
    background: blue;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icone i {
    font-size: 28px;
    color: white;
}
.data{
    display:flex;
    flex-direction:column;
    flex:1;
    /* background-color: red; */
    /* padding: 10px 20px; */
}

.data h5 {
    font-weight: 700;
    margin-bottom: 8px;
    color: white
}

.desc {
    font-size: 15px;
    /* color: rgba(0, 0, 0, 0.604); */
    margin-bottom: 12px;
    color: white;
    min-height: 60px;
}

.meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 14px;
}
 
.price {
    font-weight: 600;
    color: white;
    font-size: 15px;
}
.level {
    background: #062230;
    color: white;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 12px;
}

.view-btn {
    width: 100%;
    border: none;
    padding: 10px;
    border-radius: 10px;
    background: linear-gradient(90deg,#2d3375a8,#3D8BFF);
    color: white;
    font-weight: 600;
    transition: 0.3s;
    cursor: pointer;
    /* margin-bottom: 0px; */
}

.view-btn:hover {
    background: #000203a5;
    color: white;
}
 

.course-btn-wrap {
    max-width: 1200px;
    margin: 0 auto;
}
.course-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
}
.view-btn {
    width: 100%;
    min-height: 70px;
    padding: 14px 10px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #4f46e5, #7c3aed);
    color: white;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s ease,
    box-shadow 0.2s ease, background 0.3s ease;
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.3;
}
.view-btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(79, 70, 229, 0.4);
    background: linear-gradient(135deg, #4338ca, #6d28d9);
}
.view-btn:active {
    transform: translateY(-1px);
}

@media (max-width: 992px) {
    .course-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media (max-width: 576px) {
    .course-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
 
    /* MAIN SECTION CSS START */
.card-details .left-side-data{
    display: flex;
    align-items: center;  
}
.card-details .left-side-data i{
    background-color: rgba(0, 0, 255, 0.624);
    width: 5px;
    height: 5px;
    padding: 5px 10px;
    border-radius: 50% 50%;
    position: relative;
    top: 13px;
}
.left-side-data h6 {
    width: fit-content;
    background: linear-gradient(135deg, #062230, #5c8e91d9);
    padding:  4px 19px;
    border-radius: 10px;
    color: white;
    font-size: 12px;
    border: 1px solid #062230;
}
.card-details p{
    padding-left: 50px;
   
}
.right-data{
 
    padding: 15px 20px;
    border: 1px solid #062230;
    border-radius: 10px;
}
.right-data button{
    padding: 0px 59px;
    border-radius: 10px;
    border: none;
    background-color: rgba(0, 0, 255, 0.624);
    color: white;
}
.info-details{
 
    background: linear-gradient(135deg, #93a2c4a3, #2563eb, #14b8a6);
    border-radius: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 40px;
    margin-top: 15px;

}
    /* MAIN SECTION CSS END */

    /* CARDS INSIDE SECTION CSS START */

.main-box-container{
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 20px;
}

.card-content{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 15px;
    border: 1px solid #062230;
    border-radius: 10px;
}

.card-content .data{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
}

.card-content .data h5{
    margin: 0;
    font-size: 18px;
    font-weight: bold;
}

.card-content .data p{
    margin: 0;
    font-size: 13px;
    color: white;
    text-align: start;
    padding-left: 0px;
    /* background-color: red; */

}
.card-content .data{
    text-align: center;
}
.course-modules{
    border: 1px solid black;
    border-radius: 10px;
    /* background-color: red; */
    height: 100%;
}
.course-modules h5{
    color: white;
    font-size: 19px;
        
}
.Modules-info ul {
    /* list-style: none; */
    padding: 0px 0px 0px 20px;

}
.Modules-info ul li{
    font-size: 16px;  
    color: #062230;
    font-weight: 500;
}
    /* CARDS INSIDE SECTION CSS END */

    /* MONTH CSS START */
.course-section {
    display: none;
}
.info-details{
    display: none;
}
.commn {
    background: linear-gradient(165deg, #0d2c3b, #317478d9);
    padding: 20px 10px;
    border-radius: 10px;
    border: 1px solid #062230;
    display: flex;
    /* justify-content: ; */
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;

}

.commn button {
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

@media (max-width: 576px) {
   
    .commn button {
        padding: 8px 14px;
        font-size: 14px;
    }
}





.commn button{
    background-color:transparent ;
    color: white;
    border: none;
    padding: 8px 30px;
    border-radius: 10px;
    border: 1px solid #2563eb;
    font-size: 15px;
    font-weight: 600;
    transition: 0.3s ease-in;
}
.commn button:hover{
    background: linear-gradient(135deg, #93a2c4a3, #2563eb, #09423c);

}
    /* MONTH CSS END */

  
.Road-map{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.icon-circle{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.icon-circle i{
    font-size: 24px;
}
.Road-map h6{
    font-size: 15px;
    white-space: nowrap;
}

.arrow{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.arrow i{
    font-size: 30px;
    color: #6c757d;
}
.Road-map h6{
    color: white;
}
.fade-section {
    opacity: 0;
    transform: translateY(80px);
    transition: all 0.8s ease;
}
.slide-left {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 0.8s ease;
}
.slide-right {
    opacity: 0;
    transform: translateX(100px);
    transition: all 0.8s ease;
}
.fade-section.show,
.slide-left.show,
.slide-right.show {
    opacity: 1;
    transform: none;

    
}
/* ==========================================
   JOURNEY SECTION
========================================== */
.journey-section {
    width: 100%;
    /* padding: 50px 0; */
}
/* ==========================================
   CONTAINER
========================================== */

.journey-container {
    width: 92%;
    max-width: 1400px;
    margin: auto;
}
/* ==========================================
   TITLE
========================================== */

.journey-title {
    text-align: center;
    color: white;
    font-size: 24px;
    font-weight: 500;
    /* margin-bottom: 45px; */
    text-transform: capitalize;
}
.journey-grid {
    display: grid;
    grid-template-columns:repeat(6, 1fr);
    align-items: center;
    width: 100%;
}


/* ==========================================
   ITEM
========================================== */

.journey-item {
    position: relative;
    min-height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.journey-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    z-index: 2;
}
.icon-circle {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 25px;
    margin-bottom: 10px;
    box-shadow:0 5px 15px rgba(0, 0, 0, 0.3);
    transition: 0.3s;
}
.icon-circle:hover {
    transform:translateY(-6px)scale(1.08);
}
.enroll {
    background: #0d6efd;
}
.training {
    background: #198754;
}
.project {
    background: #0dcaf0;
}
.internship {
    background: #ffc107;
}
.interview {
    background: #6f42c1;
}
.placement {
    background: #20c997;
}
.journey-step h6 {
    color: white;
    font-size: 15px;
    font-weight: 600;
    margin: 0;
    white-space: nowrap;
}

.journey-arrow {
    position: absolute;
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
}
.journey-arrow i {
    font-size: 25px;
    color: aqua;
    animation: arrowMove 1.5s infinite;
}
@keyframes arrowMove {
    0% {
        transform: translateX(0);
        opacity: 0.5;
    }
    50% {
        transform: translateX(5px);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 0.5;
    }
}
@media (max-width: 992px) {
    .journey-container {
        width: 94%;
    }
    .journey-grid {
        grid-template-columns:
            repeat(3, 1fr);
    }
    .journey-item {
        min-height: 130px;
    }
    .icon-circle {
        width: 58px;
        height: 58px;
        font-size: 22px;
    }
    .journey-step h6 {

        font-size: 14px;
    }
    .journey-arrow {
        right: -5px;
    }
}

@media (max-width: 576px) {
    .journey-section {
        padding: 40px 0;
    }
    .journey-container {
        width: 94%;
    }
    /* 3 ITEMS PER ROW */
    .journey-grid {
        grid-template-columns:repeat(3, 1fr);
        row-gap: 20px;
    }
    .journey-item {
        min-height: 120px;
    }
    .icon-circle {
        width: 50px;
        height: 50px;
        font-size: 19px;
        margin-bottom: 8px;
    }
    .journey-step h6 {
        font-size: 12px;
    }
    .journey-arrow {
        right: -3px;
    }
    .journey-arrow i {
        font-size: 20px;
    }
}
@media (max-width: 400px) {
    .journey-container {
        width: 96%;
    }
    .journey-title {
        font-size: 20px;
        margin-bottom: 30px;
    }
    .journey-item {
        min-height: 105px;
    }
    .icon-circle {
        width: 44px;
        height: 44px;
        font-size: 17px;
    }
    .journey-step h6 {
        font-size: 10px;
    }
    .journey-arrow {
        right: -2px;
    }
    .journey-arrow i {
        font-size: 17px;
    }
}
 
</style>