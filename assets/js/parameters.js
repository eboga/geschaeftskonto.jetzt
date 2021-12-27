/**
 * Parsing search params of current page and adding some of them to «Zur Bank» links.
 */

(function () {
    const url = new URL(window.location);

    if (url.search.length > 0) {
        const params = {
            'matchtype': null,
            'tracking_id': null,
            'tracking_type': null,
            'utm_campaign': null,
            'utm_content': null,
            'utm_medium': null,
            'utm_source': null,
            'utm_term': null,
        };

        if (url.searchParams.has('utm_campaign') || url.searchParams.has('tracking_id')) {
            for (const [key, value] of url.searchParams.entries()) {
                if (key in params) {
                    params[key] = value;
                }
            }

            const btns = document.querySelectorAll(".js-ToBankLink");

            for (const btn of btns) {
                const url = new URL(btn.href);

                if (params['tracking_id'] !== null) {
                    url.searchParams.set('tracking_id', params['tracking_id']);
                }

                if (params['tracking_type'] !== null) {
                    url.searchParams.set('tracking_type', params['tracking_type']);
                }

                if (params['utm_campaign'] !== null) {
                    url.searchParams.set('subid', params['utm_campaign']);
                }

                btn.href = url.href;
            }
        }
    }
})();
