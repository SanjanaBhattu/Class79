var students = []
function submit(){
    var name_1= document.getElementById("name_of_the_student_1").value
    var name_2= document.getElementById("name_of_the_student_2").value
    var name_3= document.getElementById("name_of_the_student_3").value
    var name_4= document.getElementById("name_of_the_student_4").value
    var name_5= document.getElementById("name_of_the_student_5").value

    students.push(name_1)
    students.push(name_2)
    students.push(name_3)
    students.push(name_4)
    students.push(name_5)

    console.log(students)

    document.getElementById("display_name").innerHTML=students

    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}

function sorting(){
    students.sort()
    console.log(students)
    document.getElementById("display_name").innerHTML=students
}