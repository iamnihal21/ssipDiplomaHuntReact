import React from 'react';
import '../style/TutorialSec.css'
import '../style/CommonSecMedia.css'
import '../style/style.css'

function TutorialSection() {
    const sheetId = "1yHd9LruwJGYuuHuWX5oHKK8AmTdbscqYQNNEsSiwuko";
    const apiKey = "AIzaSyDfdTtPMhqb_Fye-HA_aJ_LFJDobBZCpJ4";
    const tutotialUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Tutorial?key=${apiKey}`;
    function addVideos() {
        const tutorial_video = [];
        tutorial_video.forEach(function (i) {
            console.log(i);
            let video = document.createElement('div');
            let h3 = document.createElement('h3');
            let iframe = document.createElement('iframe');

            h3.innerHTML = i.VIDEO_TITLE;
            iframe.innerHTML = 'Loading...'
            iframe.setAttribute('src', i.VIDEO_LINK)
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');

            video.appendChild(h3);
            video.appendChild(iframe);

            tutorial_video.appendChild(video);
        })
    }
    const fetchTutorial = async () => {
        const tutorial_video = [];
        try {
            const response = await fetch(tutotialUrl);
            const data = await response.json();


            const values = data.values;

            if (values.length) {
                const headers = values[0];

                for (let i = 1; i < values.length; i++) {
                    const dataObject = {};
                    headers.forEach((header, index) => {
                        dataObject[header] = values[i][index];
                    });
                    tutorial_video.push(dataObject);
                }
                addVideos();
            } else {
                console.error("No data found in the Tutorial Sheet");
            }
            // console.log(tutorial_video);
        } catch (error) {
            // console.error(error);
        }
    };

    fetchTutorial();
    return (
        <>
            <input type="radio" name="checkbox_tick" value="tutorial_checkbox" id="tutorial_checkbox" hidden />
            <section>
                <div id="tutotial_videos"></div>
            </section>
        </>
    );
}
export default TutorialSection;
