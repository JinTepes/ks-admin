import React from "react";

function ScreenshotsPage(){
    return(
        <div>
            <h3>
                View Screenshots Captured by Admin Command
            </h3>
            <h4>
                This page will list all the screenshots of players (For cheating detection only)
            </h4>
            <h4>
                Note: It takes time to upload the image to this page. (Around 5-30 seconds after using the screenshot command)
            </h4>
            <h2>
                NOTE: Do not use the screenshot as the evidence of cheating because it is Invasion of privacy.
                So we cannot let players know we can capture them.
                Also, do not tell anyone we have the ability to screenshot.
            </h2>
            <div>
                <table>
                    <tr>
                        <th>
                            Account Name
                        </th>
                        <th>
                            Capture Date
                        </th>
                        <th>
                            View Image
                        </th>
                        <th>
                            Delete Image
                        </th>
                    </tr>
                    <tr>
                        <td>1 Acc Name</td>
                        <td>1 Capture</td>
                        <td><a href="">1 View Image</a></td>
                        <td><a href="">1 Del</a></td>
                    </tr>
                    <tr>
                        <td>2 Acc Name</td>
                        <td>2 Capture</td>
                        <td><a href="">2 View Image</a></td>
                        <td><a href="">2 Del</a></td>
                    </tr>
                </table>
            </div>

        </div>
    );
}

export default ScreenshotsPage;