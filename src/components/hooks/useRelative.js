import { useStaticQuery, graphql } from "gatsby"

const WPURLData = () => {
    const { wp } = useStaticQuery(
        graphql`
            query WPURL {
                wp {
                    generalSettings {
                        url
                    }
                }
            }
        `
    )
    return wp.generalSettings.url
}

export const useRelative = url => {
    if (!url) return undefined

    let WPURL = WPURLData()
    WPURL = WPURL.slice(0)
    let string = url

    if (url.startsWith(`/`)) return url
    string = string.replace(WPURL, ``)
    return string
}

export default useRelative