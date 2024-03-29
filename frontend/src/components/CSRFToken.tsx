import React, { useEffect, useState } from "react";
import axios from 'axios';


const CSRFToken: React.FC = () => {
    const [csrftoken, setCsrftoken] = useState<ReturnType<typeof getCookie>>('');

    function getCookie(name: string) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    } 

    async function fetchToken () {
        try {
            await axios.get(`${process.env.REACT_APP_API_URL}/api/accounts/csrf_cookie/`);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchToken();
        setCsrftoken(getCookie('csrftoken'));
    }, [csrftoken]);

    return (
        <input type="hidden" name='csrfmiddlewaretoken' value={`${csrftoken}`} />
    );
}

export default CSRFToken;
