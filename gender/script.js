const genders = [
    "Agender", "Androgyne", "Androgynous", "Bigender", "Cis", "Cisgender", "Cis Female", "Cis Male", "Cis Man",
    "Cis Woman", "Cisgender Female", "Cisgender Male", "Cisgender Man", "Cisgender Woman", "Female to Male", "FTM",
    "Gender Fluid", "Gender Nonconforming", "Gender Questioning", "Gender Variant", "Genderqueer", "Intersex", "Male to Female",
    "MTF", "Neither", "Neutrois", "Non-binary", "Other", "Pangender", "Trans", "Trans Female", "Trans Male", "Trans Man",
    "Trans Person", "Trans Woman", "Transfeminine", "Transgender", "Transgender Female", "Transgender Male", "Transgender Man",
    "Transgender Person", "Transgender Woman", "Transmasculine", "Transsexual", "Transsexual Female", "Transsexual Male",
    "Transsexual Man", "Transsexual Person", "Transsexual Woman", "Two-Spirit"
];

const dropdown = document.getElementById('gender');

genders.forEach(gender => {
    let option = document.createElement('option');
    option.value = gender.toLowerCase().replace(/ /g, '-');
    option.text = gender;
    dropdown.add(option);
});
