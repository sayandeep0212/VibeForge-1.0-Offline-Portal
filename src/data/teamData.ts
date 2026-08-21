// Auto-generated from Excel + PDF data
// Team data from "Team Wise Problem Statement.xlsx"
// Problem statements from "VibeForge_1.0_Offline_Problem_Statements.pdf"

export interface TeamData {
  teamName: string;
  leaderUid: string;
  domain: string;
}

export interface ProblemStatement {
  domain: string;
  title: string;
  content: string;
}

export const teams: TeamData[] = [
  { teamName: "SheNova", leaderUid: "GL-8B4JCCFN9R", domain: "AI in Entertainment & Media" },
  { teamName: "NeuroNexus", leaderUid: "GL-LOR9LDPKZZ", domain: "AI in Education (EdTech)" },
  { teamName: "DEXTERS", leaderUid: "GL-KWDNALDFEU", domain: "AI in Healthcare & Wellness (Personal Health)" },
  { teamName: "Webstrorm", leaderUid: "GL-OJWGPVBV8H", domain: "AI in Finance & E-Commerce (FinTech)" },
  { teamName: "Powerpuff Girls", leaderUid: "GL-WV30R4T3FQ", domain: "AI in Finance & E-Commerce (FinTech)" },
  { teamName: "CtrlV", leaderUid: "GL-B3ZPCM_KMH", domain: "AI in Healthcare & Wellness (Personal Health)" },
  { teamName: "ECLIPSE", leaderUid: "GL-IAUPJK4B9T", domain: "AI in Healthcare & Wellness (Personal Health)" },
  { teamName: "Tres Amigos", leaderUid: "GL-QY1YNEHXTK", domain: "AI in Education (EdTech)" },
  { teamName: "CODE MAVERICK", leaderUid: "GL-9TRQDCHG7A", domain: "AI in Healthcare & Wellness (Personal Health)" },
  { teamName: "NEURAL PAIR", leaderUid: "GL-QAXMTKNX34", domain: "AI in Education (EdTech)" },
  { teamName: "SubLiminals", leaderUid: "GL-7XQNRH4IAT", domain: "AI in Finance & E-Commerce (FinTech)" },
  { teamName: "3 Musketeers", leaderUid: "GL-29Z-4TIZSB", domain: "AI in Education (EdTech)" },
  { teamName: "তৃপর্ণ", leaderUid: "GL-YOIUXYRPE5", domain: "AI in Education (EdTech)" },
  { teamName: "Team Kratos", leaderUid: "GL-WVVC6DBPOJ", domain: "AI in Workplace (HR & Team Dynamics)" },
  { teamName: "Team B.I", leaderUid: "GL-UTO1DIIFNY", domain: "AI in Healthcare & Wellness (Personal Health)" },
  { teamName: "Error 404:not found", leaderUid: "GL-PE2URZNSFH", domain: "AI in Finance & E-Commerce (FinTech)" },
  { teamName: "NeuroNova", leaderUid: "GL-A5_NUPKOZT", domain: "AI in Healthcare & Wellness (Personal Health)" },
  { teamName: "Code Blooded", leaderUid: "GL-ZENO-DAGGC", domain: "AI in Entertainment & Media" },
  { teamName: "Code striekrs", leaderUid: "GL-CGDKQWLTOX", domain: "AI in Finance & E-Commerce (FinTech)" },
  { teamName: "The Moonwalkers", leaderUid: "GL-KUF7GA_EHJ", domain: "AI in Entertainment & Media" },
  { teamName: "shadow coder", leaderUid: "GL-3IN1BIWI_U", domain: "AI in Education (EdTech)" },
  { teamName: "Quantum Trio", leaderUid: "GL-7-GCD0JD1V", domain: "AI in Workplace (HR & Team Dynamics)" },
  { teamName: "Vector", leaderUid: "GL-SVF-XEECNS", domain: "AI in Finance & E-Commerce (FinTech)" },
  { teamName: "KNIGHT OWLS", leaderUid: "GL-2E-TH0HQHO", domain: "AI in Workplace (HR & Team Dynamics)" },
  { teamName: "NexByte", leaderUid: "GL-TKDRW_1JZM", domain: "AI in Education (EdTech)" },
  { teamName: "Trident", leaderUid: "GL-HQCBHI9_SO", domain: "AI in Workplace (HR & Team Dynamics)" },
  { teamName: "The Broken Brains", leaderUid: "GL--Z01XS5AXE", domain: "AI in Entertainment & Media" },
  { teamName: "CODE CRAFTER", leaderUid: "GL-DBCVKPXVYN", domain: "AI in Finance & E-Commerce (FinTech)" },
  { teamName: "Context Creators", leaderUid: "GL-NMFYSUL8PD", domain: "AI in Healthcare & Wellness (Personal Health)" },
  { teamName: "FANTASTIC 4", leaderUid: "GL-MQDBXP8KOQ", domain: "AI in Finance & E-Commerce (FinTech)" },
  { teamName: "Code Entropy", leaderUid: "GL-GZAFVT0ACM", domain: "AI in Education (EdTech)" },
  { teamName: "The Debug Squad", leaderUid: "GL-DYQ1FP-KLQ", domain: "AI in Finance & E-Commerce (FinTech)" },
  { teamName: "Team Diamonds", leaderUid: "GL-QWMJVPDOJV", domain: "AI in Healthcare & Wellness (Personal Health)" },
  { teamName: "RED_SKULL CODERS", leaderUid: "GL-A_HEFMX_YY", domain: "AI in Entertainment & Media" },
  { teamName: "Tech Titans", leaderUid: "GL-IJ6EHD3JW8", domain: "AI in Entertainment & Media" },
];

export const problemStatements: Record<string, ProblemStatement> = {
  "AI in Education (EdTech)": {
    domain: "AI in Education (EdTech)",
    title: "1. Domain: AI in Education (EdTech)",
    content: `Problem Statement
Design and integrate an AI-powered Socratic challenge feature into an existing learning platform. It should question a student's submitted answer, test their reasoning, and confirm whether they truly understand the concept.

1. Introduction
Students often use AI tools to get answers quickly, but getting the correct answer does not always mean they understand the idea behind it. Traditional quizzes also have limited ability to identify the exact reasoning mistake a student has made.

2. Challenges
• Students can copy AI-generated answers without understanding them.
• Normal quizzes often only say whether an answer is right or wrong.
• Teachers may not know which concepts students actually misunderstand.
• Students need a way to explain their reasoning, not just submit an answer.

3. Application Workflow
Student submits an answer → AI checks the reasoning → AI creates a challenge → Student defends the answer → AI evaluates the defense → Mastery score is updated.

4. User Roles & Capabilities
• Student: Submit answers and defend their reasoning.
• Student: View mastery score and feedback.
• Instructor/Admin: View common mistakes and difficult concepts.
• Instructor/Admin: Set how strict the AI challenges should be.

5. Core Feature Specifications
• Generate a relevant Socratic challenge from the student's answer.
• Let the student respond to the challenge.
• Evaluate the response and identify whether the student understood the concept.
• Give a mastery score and short feedback.

Test Scenario (Example)
Example:
Student answer: "Binary Search is O(log n) because we divide the search space in half."
AI challenge: "Merge Sort also divides the array in half. Why is Merge Sort O(n log n) while Binary Search is O(log n)?"

Expected result: The student explains that Merge Sort still processes all elements during merging, while Binary Search discards half the search space at each step.

6. Expected Outcomes
• Helps reduce rote learning and answer-copying.
• Gives students immediate feedback.
• Helps identify conceptual misunderstandings.
• Can be added to an existing quiz or learning platform.

7. Bonus Ideas
• Voice-based student defense.
• A dashboard showing the most common misconceptions in a class.`
  },
  "AI in Workplace (HR & Team Dynamics)": {
    domain: "AI in Workplace (HR & Team Dynamics)",
    title: "2. Domain: AI in Workplace (HR & Team Dynamics)",
    content: `Problem Statement
Design and integrate an AI-powered communication stress-testing feature into an existing workplace or HR platform. It should predict how different stakeholders may react to a draft and help the user improve the message before sending it.

1. Introduction
Workplace communication can affect different people in very different ways. A message that seems reasonable to a manager may create problems for developers, HR, or other teams. A quick AI-based review can help identify these concerns before the message is sent.

2. Challenges
• Harsh or unclear messages can reduce team morale.
• Managers may not see how a decision affects different teams.
• Poor communication can create unnecessary arguments.
• HR teams may need to check messages for policy or people-related risks.

3. Application Workflow
User enters a draft → AI simulates different workplace viewpoints → Problems and friction are shown → AI suggests an improved draft → User can use the improved version.

4. User Roles & Capabilities
• Team Lead/Manager: Test announcements and team messages.
• Team Lead/Manager: Review predicted reactions and use the improved draft.
• HR/Admin: Configure workplace personas and view communication trends.

5. Core Feature Specifications
• Simulate at least three different workplace personas.
• Show individual objections or concerns.
• Calculate an overall friction score.
• Generate a balanced rewrite that keeps the original intention.

Test Scenario (Example)
Example:
Draft: "The sprint deadline is moving from Friday to tomorrow morning. Everyone needs to stay online tonight."
Possible reactions:
Senior Developer: High concern about testing and bugs.
HR: Concern about unexpected overtime.
Product Lead: Supports faster delivery but sees release risks.

Expected result: The system shows a high friction score and suggests a rewrite that keeps urgency but includes flexibility.

6. Expected Outcomes
• Reduces misunderstandings in team communication.
• Helps managers think about different perspectives before sending messages.
• Makes workplace announcements more balanced.

7. Bonus Ideas
• Meeting transcript to action items.
• Custom persona builder for roles such as Security Auditor or Intern.`
  },
  "AI in Healthcare & Wellness (Personal Health)": {
    domain: "AI in Healthcare & Wellness (Personal Health)",
    title: "3. Domain: AI in Healthcare & Wellness (Personal Health)",
    content: `Problem Statement
Design and integrate an AI-powered recovery mode into an existing personal wellness platform. It should recognize when a user is under high strain, simplify the interface, and provide a short recovery plan while safely adjusting daily goals.

1. Introduction
Wellness apps usually encourage users to follow daily targets, but those targets may not make sense when someone is exhausted or under heavy stress. A smarter app should recognize such situations and reduce unnecessary pressure instead of treating every day the same.

2. Challenges
• Health apps can show too many goals when a user is already stressed or tired.
• Rigid targets can make users feel pressured.
• Users in distress may not want to fill out long forms.
• Daily activity targets may need to be reduced during recovery.

3. Application Workflow
User gives a quick health/energy check-in → AI identifies the current energy state → App switches to a simpler mode → AI creates a short recovery plan → Daily goals are adjusted → Normal mode can resume later.

4. User Roles & Capabilities
• User: Give a quick text/audio check-in.
• User: Follow the short recovery activity.
• Coach/Admin: View recovery trends and configure trigger levels.

5. Core Feature Specifications
• Detect a high-stress or low-energy state from a check-in.
• Switch the interface to a low-effort recovery mode.
• Generate a simple 3-minute recovery activity.
• Temporarily adjust daily goals and protect the user's streak.

Test Scenario (Example)
Example:
Check-in: "Exams start in two hours, I slept 3 hours, have a headache and feel sick."
Expected system behavior:
The app enters Recovery/Triage Mode, hides demanding goals, and shows a simple recovery card with hydration and a short relaxation activity. The day's normal activity target is reduced and the streak is protected.

6. Expected Outcomes
• Reduces pressure on users during difficult days.
• Provides a simpler experience when users need it most.
• Adapts daily wellness goals automatically.

7. Bonus Ideas
• Audio-guided breathing widget.
• A simple energy-level forecast after recovery.`
  },
  "AI in Entertainment & Media": {
    domain: "AI in Entertainment & Media",
    title: "4. Domain: AI in Entertainment & Media",
    content: `Problem Statement
Design and integrate an AI-powered live audience simulator into an existing creative or game platform. It should react to new content from different audience viewpoints and provide useful feedback that can improve the scene, story, or gameplay.

1. Introduction
Creators usually have to wait for real users or testers to react to a new scene, story, or game mechanic. Different types of audiences can also notice different problems. Simulating these viewpoints while creating the content can provide useful feedback much earlier.

2. Challenges
• Creators often work without immediate audience feedback.
• Basic AI tools may create content without checking its emotional flow.
• Different audiences can react very differently to the same scene.
• Creators need quick feedback while developing stories or game scenes.

3. Application Workflow
Creator adds or changes content → AI analyzes the scene → Different audience personas react → Metrics and feedback appear → Creator can request a remix or improvement → Environment or editor can react to the feedback.

4. User Roles & Capabilities
• Creator/Game Designer: Create and edit scenes, stories, or dialogue.
• Creator/Game Designer: View live audience reactions and metrics.
• Admin: Configure audience personas and view engagement trends.

5. Core Feature Specifications
• Simulate multiple audience types.
• Track tension, humor, pacing, and story consistency.
• Show live audience feedback.
• Suggest a change when a scene has a pacing or logic problem.
• Optionally change UI, lighting, or other environment settings based on audience response.

Test Scenario (Example)
Example:
A game scene makes the main ally betray the team without any earlier hint.
Expected result:
The critic says the twist feels unearned, the casual viewer finds it shocking but confusing, and the lore-focused viewer points out that it conflicts with earlier story information. The system suggests adding a small hint in an earlier scene.

6. Expected Outcomes
• Provides quick feedback during creative work.
• Helps creators test stories from different viewpoints.
• Makes the editor or game sandbox more interactive.

7. Bonus Ideas
• Live audience chat feed.
• Pacing graph showing tension changes across a story.`
  },
  "AI in Finance & E-Commerce (FinTech)": {
    domain: "AI in Finance & E-Commerce (FinTech)",
    title: "5. Domain: AI in Finance & E-Commerce (FinTech)",
    content: `Problem Statement
Design and integrate an AI-powered price-checking and counter-purchasing feature into an existing e-commerce or finance platform. It should identify possible dynamic pricing, estimate a fair price, and suggest practical ways for users to find a better deal.

1. Introduction
Online prices can change quickly, and users may sometimes see higher prices because of timing, repeated searches, or other signals. Most shoppers have no simple way to understand whether a displayed price is reasonable or what alternatives may be available.

2. Challenges
• Online prices can change based on timing, repeated visits, or other context.
• Users may not know whether a price is close to a normal market price.
• Countdown timers and scarcity messages can create pressure.
• Users often have to search manually for cheaper alternatives.

3. Application Workflow
User views a product or booking → System checks available price and context information → AI estimates surge/manipulation risk → Fair-price estimate is shown → Counter-purchasing suggestions are provided.

4. User Roles & Capabilities
• Consumer: Check the price and see a fair-price estimate.
• Consumer: View warnings and alternative buying suggestions.
• Admin: Review pricing trends and fairness scores.

5. Core Feature Specifications
• Detect suspicious dynamic-price patterns.
• Estimate a fair market price.
• Show the difference between the listed price and estimated fair price.
• Provide practical counter-purchasing suggestions.

Test Scenario (Example)
Example:
Listing: Bangalore to Kolkata flight/conference pass — ₹7,800.
The item was viewed four times in 30 minutes and shows a "Only 1 seat left" countdown.
Expected result:
The system flags a high surge/manipulation risk, estimates a lower fair price, explains the warning signs, and suggests alternative booking options or a better time to check.

6. Expected Outcomes
• Helps users make more informed purchases.
• Makes possible pricing manipulation easier to understand.
• Provides actionable alternatives instead of only showing a warning.

7. Bonus Ideas
• Historical price-floor tracker.
• One-click bridge to verified alternative listings.`
  },
};

export function findTeamByUid(uid: string): TeamData | undefined {
  return teams.find(t => t.leaderUid.toUpperCase() === uid.trim().toUpperCase());
}

export function getProblemStatement(domain: string): ProblemStatement | undefined {
  // Normalize the domain key by trimming whitespace
  const normalizedDomain = domain.trim();
  for (const key of Object.keys(problemStatements)) {
    if (key.trim() === normalizedDomain) {
      return problemStatements[key];
    }
  }
  return undefined;
}
