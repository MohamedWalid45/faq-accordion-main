const button=document.querySelectorAll(".contant .quiz .question .image button img")


button.forEach(function(btn) {
    btn.addEventListener("click", function() {
        const quiz=btn.closest(".quiz")
        quiz.querySelector(".text").classList.toggle("hidden")
        quiz.querySelector(".plus").classList.toggle("hidden")
        quiz.querySelector(".minus").classList.toggle("hidden")

    })
})