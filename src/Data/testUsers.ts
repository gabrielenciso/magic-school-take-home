export const testUsers = [
  { first_name: "Emma", last_name: "Johnson", email: "emma.johnson@student.school.edu", role: "student", grade: 10 },
  { first_name: "Liam", last_name: "Smith", email: null, role: "parent", phone: "555-123-4567" },
  { first_name: "Olivia", last_name: "Brown", email: "olivia.brown@school.edu", role: "teacher", subject: "Math" },
  { first_name: "Noah", last_name: "Davis", email: null, role: null, guardian: "Maria Davis" },
  { first_name: "Ava", last_name: "Wilson", email: "ava.wilson@student.school.edu", role: "student", grade: 12, parent_email: "parent.wilson@example.com" },
  { first_name: "James", last_name: "Taylor", email: "james.taylor@school.edu", role: "admin", permissions: ["full_access"] },
  { first_name: "Isabella", last_name: "Moore", email: null, role: null, address: "123 Maple St" },
  { first_name: "Benjamin", last_name: "Anderson", email: "ben.anderson@student.school.edu", role: "student", grade: 9, extracurricular: "Chess Club" },
  { first_name: "Mia", last_name: "Thomas", email: "mia.thomas@example.com", role: "guardian", phone: "555-234-5678" }, // Empty email
  { first_name: "Elijah", last_name: "Jackson", email: null, role: "other", notes: "Temporary access" },
  { first_name: "Charlotte", last_name: "White", email: "charlotte.white@school.edu", role: "teacher", subject: "Science" },
  { first_name: "Lucas", last_name: "Harris", email: "lucas.harris@student.school.edu", role: "student", grade: 11, allergy_info: "Peanuts" },
  { first_name: "Amelia", last_name: "Martin", email: null, role: null, emergency_contact: "555-987-6543" },
  { first_name: "Mason", last_name: "Lee", email: "mason.lee@student.school.edu", role: "student", grade: 8 },
  { first_name: "Harper", last_name: "Clark", email: null, role: "parent", linked_student: "Mason Lee" },
  { first_name: "Ethan", last_name: "Lewis", email: "ethan.lewis@school.edu", role: "teacher", subject: "History" },
  { first_name: "Evelyn", last_name: "Young", email: null, role: null, enrollment_year: 2023 },
  { first_name: "Logan", last_name: "Walker", email: "logan.walker@student.school.edu", role: "student", grade: 10, transportation: "Bus #45" },
  { first_name: "Abigail", last_name: "Hall", email: "abigail.hall@school.edu", role: "admin" },
  { first_name: "Oliver", last_name: "Allen", email: "oliver.allen@example.com", role: "guardian", address: "456 Oak St" }, // Kept example.com for realism
  { first_name: "Emily", last_name: "Green", email: "emily.green@student.school.edu", role: "student", grade: 9 },
  { first_name: "Daniel", last_name: "King", email: null, role: null, parent: { name: "Sarah King", email: "sarahk@example.com" } },
  { first_name: "Sofia", last_name: "Wright", email: "sofia.wright@school.edu", role: "teacher", subject: "Art" }, // Fixed email
  { first_name: "Alexander", last_name: "Scott", email: "alexander.scott@student.school.edu", role: "student", grade: 12, college_applications: ["State University"] },
  { first_name: "Grace", last_name: "Adams", email: "grace.adams@school.edu", role: "counselor" },
  { first_name: "Jackson", last_name: "Nelson", email: "", role: null, sibling: "Emma Nelson" }, // Empty email
  { first_name: "Lily", last_name: "Carter", email: "lily.carter@student.school.edu", role: "student", grade: 7 },
  { first_name: "Aiden", last_name: "Mitchell", email: null, role: "parent", employer: "Tech Corp" }, // Added email: null
  { first_name: "Chloe", last_name: "Perez", email: null, role: "other", description: "Volunteer" },
  { first_name: "Caleb", last_name: "Roberts", email: "caleb.roberts@student.school.edu", role: "student", grade: 10, homeroom: "Room 204" }
];
