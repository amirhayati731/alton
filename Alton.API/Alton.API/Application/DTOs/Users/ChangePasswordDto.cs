﻿namespace Alton.API.Application.DTOs.Users
{
    public class ChangePasswordDto
    {
        public string Username { get; set; } = string.Empty;
        public string NewPassword { get; set; } = string.Empty;
        public string OldPassword { get; set; } = string.Empty;
    }
}
