export const resumes: Resume[] = [
    {
        id: "1",
        companyName: "Google",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume-1.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "2",
        companyName: "Microsoft",
        jobTitle: "Cloud Engineer",
        imagePath: "/images/resume-2.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "3",
        companyName: "Apple",
        jobTitle: "iOS Developer",
        imagePath: "/images/resume-3.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "4",
        companyName: "Google",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume-1.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "5",
        companyName: "Microsoft",
        jobTitle: "Cloud Engineer",
        imagePath: "/images/resume-2.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "6",
        companyName: "Apple",
        jobTitle: "iOS Developer",
        imagePath: "/images/resume-3.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
];

export const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      ATS: {
        score: number; //rate based on ATS suitability
        tips: {
          type: "good" | "improve";
          tip: string; //give 3-4 tips
        }[];
      };
      toneAndStyle: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      content: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      structure: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      skills: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
    }`;

export const prepareInstructions = ({ jobTitle, jobDescription }: { jobTitle: string; jobDescription: string; }) =>
  `You are an expert in ATS (Applicant Tracking System) and resume analysis.
    Please analyze and rate this resume and suggest how to improve it.
    The rating can be low if the resume is bad.
    Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
    If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
    If available, use the job description for the job user is applying to to give more detailed feedback.
    If provided, take the job description into consideration.
    The job title is: ${jobTitle}
    The job description is: ${jobDescription}

    Important rules:
    - Output ONLY a JSON object that matches the \`feedback\` structure exactly as defined below.
    - Do NOT wrap the output in any other object (no resumeUrl, imageBlobUrl, or extra root keys).
    - Do NOT rename any keys or change the nesting.
    - All numeric scores must be integers between 0 and 100.
    - Each "tips" array must contain exactly 3–4 items.
    - Do NOT add backticks or markdown formatting.

    Required JSON structure:
    ${AIResponseFormat}

    Example of a valid output:
    {
      "overallScore": 85,
      "ATS": {
        "score": 90,
        "tips": [
          { "type": "good", "tip": "Strong keyword alignment" },
          { "type": "improve", "tip": "Add more job-specific terms" },
          { "type": "improve", "tip": "Include measurable achievements" }
        ]
      },
      "toneAndStyle": {
        "score": 88,
        "tips": [
          { "type": "good", "tip": "Professional tone", "explanation": "The tone is formal and aligned with industry expectations." },
          { "type": "improve", "tip": "Vary sentence structure", "explanation": "Some sections read monotonously; varying sentence length could improve engagement." },
          { "type": "improve", "tip": "Reduce passive voice", "explanation": "Active voice makes your accomplishments sound stronger." }
        ]
      },
      "content": {
        "score": 84,
        "tips": [
          { "type": "good", "tip": "Relevant project experience", "explanation": "The projects listed match the role requirements." },
          { "type": "improve", "tip": "Add quantified results", "explanation": "Include measurable metrics to demonstrate impact." },
          { "type": "improve", "tip": "Highlight leadership roles", "explanation": "Showcase any roles where you led a team or initiative." }
        ]
      },
      "structure": {
        "score": 90,
        "tips": [
          { "type": "good", "tip": "Clear section headings", "explanation": "Headings are well-organized and easy to navigate." },
          { "type": "improve", "tip": "Balance white space", "explanation": "Some sections feel crowded; improving spacing could boost readability." },
          { "type": "improve", "tip": "Consistent formatting", "explanation": "Ensure font sizes and bullet styles are consistent throughout." }
        ]
      },
      "skills": {
        "score": 92,
        "tips": [
          { "type": "good", "tip": "Relevant technical skills", "explanation": "Skills listed are directly relevant to the job role." },
          { "type": "improve", "tip": "Add proficiency levels", "explanation": "Indicating proficiency can help recruiters assess skill strength." },
          { "type": "improve", "tip": "Include soft skills", "explanation": "Adding soft skills could make you appear more well-rounded." }
        ]
      }
    }

    Return only this JSON object and nothing else.
  `;
