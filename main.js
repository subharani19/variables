var score=0;
function decrase()
{
    score=score-10;
    document.getElementById("scorelable").textContent=score;
}
function increase()
{
    score=score+10;
    document.getElementById("scorelable").textContent=score;
}