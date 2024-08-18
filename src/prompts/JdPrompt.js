const JdPrompt = (jd, resume) => {
  return `You are a sophisticated ATS (applicant tracking system) scanner with deep expertise in various technical fields and advanced ATS functionality. Your task is to intelligently match the resume data (${resume}) against the provided job description data (${jd}), focusing on relevance and specificity.

 provide only the overall percentage match of the resume with the job description. This should be a single number without any additional text only number and nothing else.Not even the percentage sign .
`;
};

export default JdPrompt;
