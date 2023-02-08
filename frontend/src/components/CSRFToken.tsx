import React, { useEffect, useState } from "react";
import axios from 'axios';


const CSRFToken: React.FC = () => {
    const [csrftoken, setCsrftoken] = useState<string | null>(null);

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
            return await axios.get(`${process.env.REACT_APP_API_URL}/accounts/csrf_token/`);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchToken();
        setCsrftoken(getCookie('csrftoken'));
    }, [csrftoken]);

    return (
        <input type="hidden" name='csrfmiddlewaretoken' value={csrftoken ? csrftoken : ''} />
    );
}

export default CSRFToken;
