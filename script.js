const dailyBtn = document.querySelector('.daily-btn'),
weeklyBtn = document.querySelector('.weekly-btn'),
monthlyBtn = document.querySelector('.monthly-btn'),
Btn = document.querySelectorAll('.btn'),
workCurrentTime = document.querySelector('.work'),
workPreviousTime = document.querySelector('.last_work'),
preTime = document.querySelectorAll('.pre_time'),
currentPlayTime = document.querySelector('.play'),
previousPlayTime = document.querySelector('.last-play'),
currentStudyTime = document.querySelector('.study'),
previousStudyTime = document.querySelector('.last-study'),
currentExerciseTime = document.querySelector('.exercise'),
previousExerciseTime = document.querySelector('.last-exercise'),
currentSocialTime = document.querySelector('.social'),
previousSocialTime = document.querySelector('.last-social'),
currentSelfCareTime = document.querySelector('.selfCare'),
previousSelfCareTime = document.querySelector('.last-selfCare')


const fetchData = async(time)=>{
    const res = await fetch("./data.json")
    const data  = await res.json()
    data.map((work)=>{
        checktime(work,time)  
    })
}

fetchData("daily")

function checktime(data,time){
    
    if(time == "daily"){
        
        preTime.forEach((times)=>{
            times.innerHTML = "Day"
        })

        if(data.title == "Work"){
            workCurrentTime.innerHTML = data.timeframes.daily.current
            workPreviousTime.innerHTML = data.timeframes.daily.previous
        }
        if(data.title == "Play"){
            currentPlayTime.innerHTML = data.timeframes.daily.current
            previousPlayTime.innerHTML = data.timeframes.daily.previous
        }
        if(data.title == "Study"){
            currentStudyTime.innerHTML = data.timeframes.daily.current
            previousStudyTime.innerHTML = data.timeframes.daily.previous
        }
        if(data.title == "Exercise"){
            currentExerciseTime.innerHTML = data.timeframes.daily.current
            previousExerciseTime.innerHTML = data.timeframes.daily.previous
        }
        if(data.title == "Social"){
            currentSocialTime.innerHTML = data.timeframes.daily.current
            previousSocialTime.innerHTML = data.timeframes.daily.previous
        }
        if(data.title == "Self Care"){
            currentSelfCareTime.innerHTML = data.timeframes.daily.current
            previousSelfCareTime.innerHTML = data.timeframes.daily.previous
        }
    }

    if(time == "weekly"){
        
        preTime.forEach((times)=>{
            times.innerHTML = "Week"
        })

        if(data.title == "Work"){
            workCurrentTime.innerHTML = data.timeframes.weekly.current
            workPreviousTime.innerHTML = data.timeframes.weekly.previous
        }
        if(data.title == "Play"){
            currentPlayTime.innerHTML = data.timeframes.weekly.current
            previousPlayTime.innerHTML = data.timeframes.weekly.previous
        }
        if(data.title == "Study"){
            currentStudyTime.innerHTML = data.timeframes.weekly.current
            previousStudyTime.innerHTML = data.timeframes.weekly.previous
        }
        if(data.title == "Exercise"){
            currentExerciseTime.innerHTML = data.timeframes.weekly.current
            previousExerciseTime.innerHTML = data.timeframes.weekly.previous
        }
        if(data.title == "Social"){
            currentSocialTime.innerHTML = data.timeframes.weekly.current
            previousSocialTime.innerHTML = data.timeframes.weekly.previous
        }
        if(data.title == "Self Care"){
            currentSelfCareTime.innerHTML = data.timeframes.weekly.current
            previousSelfCareTime.innerHTML = data.timeframes.weekly.previous
        }
    }

    if(time == "monthly"){
        
        preTime.forEach((times)=>{
            times.innerHTML = "Month"
        })

        if(data.title == "Work"){
            workCurrentTime.innerHTML = data.timeframes.monthly.current
            workPreviousTime.innerHTML = data.timeframes.monthly.previous
        }
        if(data.title == "Play"){
            currentPlayTime.innerHTML = data.timeframes.monthly.current
            previousPlayTime.innerHTML = data.timeframes.monthly.previous
        }
        if(data.title == "Study"){
            currentStudyTime.innerHTML = data.timeframes.monthly.current
            previousStudyTime.innerHTML = data.timeframes.monthly.previous
        }
        if(data.title == "Exercise"){
            currentExerciseTime.innerHTML = data.timeframes.monthly.current
            previousExerciseTime.innerHTML = data.timeframes.monthly.previous
        }
        if(data.title == "Social"){
            currentSocialTime.innerHTML = data.timeframes.monthly.current
            previousSocialTime.innerHTML = data.timeframes.monthly.previous
        }
        if(data.title == "Self Care"){
            currentSelfCareTime.innerHTML = data.timeframes.monthly.current
            previousSelfCareTime.innerHTML = data.timeframes.monthly.previous
        }
    }
}

dailyBtn.addEventListener("click",()=>{
    fetchData("daily")
})

weeklyBtn.addEventListener("click",()=>{
    fetchData("weekly")
})

monthlyBtn.addEventListener("click",()=>{
    fetchData("monthly")
})


Btn.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        btn.classList.add("active")
        checkActive(index)
    })
})

function checkActive(index){  
    console.log(index)
    Btn.forEach((btn,index1)=>{
        console.log(index1)
        if(index != index1){
            btn.classList.remove("active")
        }
    })
}





