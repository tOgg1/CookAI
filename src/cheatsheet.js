CookAI = {};

// ALL FUNCTIONS
// setAutoGolden(bool)
// toggleAutoGolden()
// setAutoClick(clickPerInterval, interval)
// stopAutoClick()
// setAutoFrenzyClick()
// stopAutoFrenzyClick()

CookAI.init = function()
{
	var clickHandle = -1;
	var frenzyClickHandle = -1;

	CookAI.setAutoGolden = function(bool)
	{
		
	}
	
	CookAI.toggleAutoGolden = function()
	{
		
	}
	
	CookAI.setAutoClick = function(clickPerInterval, interval)
	{
		
		var autoClicker = function()
		{
			for(var i = 0; i < clickPerInterval; ++i)
			{
				Game.ClickCookie();
				Game.lastClick = 0;
			}	
		}
		return (CookAI.clickHandle = setInterval(autoClicker, interval));
	}
	
	CookAI.stopAutoClick = function()
	{
		if(CookAI.clickHandle == -1)
		{
			return;
		}
		
		clearInterval(clickHandle);
		CookAI.clickHandle = -1;
	}
	
	
	CookAI.setAutoFrenzyClick = function(clickPerInterval, interval)
	{		
		var autoHandle = -1;
		
		var detectFrenzy = function()
		{
			var autoClicker = function()
			{
				if(Game.clickFrenzy > 0)
				{
					for(var i = 0; i < clickPerInterval; ++i)
					{
						Game.ClickCookie();
						Game.lastClick = 0;
					}	
				}
				else
				{
					return clearInterval(autoHandle);
				}
			}
			
			if(Game.clickFrenzy > 0)
			{
				autoHandle = setInterval(autoClicker, interval);
			}
			return false;
		}		
		return (CookAI.frenzyClickHandle = setInterval(detectFrenzy, 100));
	}	
	
	CookAI.stopAutoFrenzyClick = function(clickPerInterval, interval)
	{
		if(CookAI.frenzyClickHandle == -1)
		{
			return;
		}
		
		clearInterval(CookAI.frenzyClickHandle);
		CookAI.frenzyClickHandle = -1;
	}
}

CookAI.init();	

