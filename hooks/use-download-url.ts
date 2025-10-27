import { useEffect, useState } from 'react';

export const useDownloadUrl = () => {
  const [url, setUrl] = useState('#');

  useEffect(() => {
    const platform = window.navigator.platform.toLowerCase();
    const userAgent = window.navigator.userAgent.toLowerCase();

    // macOS
    if (platform.includes('mac') || userAgent.includes('mac')) {
      setUrl('https://github.com/appswap-dev/appswap-releases/releases/latest/download/AppSwap-darwin-arm64-1.0.2.zip');
      return;
    }

    // Windows
    if (platform.includes('win') || userAgent.includes('win')) {
      setUrl('https://github.com/appswap-dev/appswap-releases/releases/latest/download/AppSwap-1.0.2.Setup.exe');
      return;
    }

    // Linux - default to .deb
    if (platform.includes('linux') || userAgent.includes('linux')) {
      setUrl('https://github.com/appswap-dev/appswap-releases/releases/latest/download/appswap_1.0.2_amd64.deb');
      return;
    }

    // Default to deb
    setUrl('https://github.com/appswap-dev/appswap-releases/releases/latest/download/appswap_1.0.2_amd64.deb');
  }, []);

  return url;
};
