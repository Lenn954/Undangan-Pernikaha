// Login Functionality
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple login check (in real app, this would be an API call)
    if (username === 'admin' && password === 'password') {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dashboardPage').style.display = 'flex';
    } else {
        alert('Invalid username or password');
    }
});

// Logout Functionality
document.getElementById('logoutBtn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('dashboardPage').style.display = 'none';
});

// Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.remove('active');
        });
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show selected content section
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
    });
});

// Copy Invite Link
function copyInviteLink() {
    const linkInput = document.getElementById('inviteLink');
    linkInput.select();
    document.execCommand('copy');
    alert('Invitation link copied to clipboard!');
}

// Guest List Functionality
document.getElementById('addGuestBtn').addEventListener('click', function() {
    document.getElementById('modalTitle').textContent = 'Add New Guest';
    document.getElementById('guestForm').reset();
    document.getElementById('guestModal').style.display = 'flex';
});

document.getElementById('cancelGuestBtn').addEventListener('click', function() {
    document.getElementById('guestModal').style.display = 'none';
});

document.getElementById('guestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real app, this would save guest data via API
    alert('Guest information saved successfully!');
    document.getElementById('guestModal').style.display = 'none';
});

// Edit guest
document.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const row = this.closest('tr');
        document.getElementById('modalTitle').textContent = 'Edit Guest';
        document.getElementById('guestName').value = row.cells[0].textContent;
        document.getElementById('guestEmail').value = row.cells[1].textContent;
        document.getElementById('guestPhone').value = row.cells[2].textContent;
        
        const attendance = row.cells[3].textContent;
        if (attendance === 'Attending') {
            document.getElementById('guestAttendance').value = 'attending';
        } else if (attendance === 'Not Attending') {
            document.getElementById('guestAttendance').value = 'notAttending';
        } else {
            document.getElementById('guestAttendance').value = 'pending';
        }
        
        document.getElementById('guestModal').style.display = 'flex';
    });
});

// Delete guest
document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (confirm('Are you sure you want to delete this guest?')) {
            // In a real app, this would delete via API
            this.closest('tr').remove();
            alert('Guest deleted successfully!');
        }
    });
});

// Story Edit Functionality
document.querySelectorAll('.timeline-edit').forEach(btn => {
    btn.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        const content = this.closest('.timeline-content');
        
        document.getElementById('storyModalTitle').textContent = 'Edit Story Section ' + section;
        document.getElementById('storyTitle').value = content.querySelector('.timeline-date').textContent;
        document.getElementById('storyText').value = content.querySelector('.timeline-text').textContent;
        
        document.getElementById('storyModal').style.display = 'flex';
    });
});

document.getElementById('cancelStoryBtn').addEventListener('click', function() {
    document.getElementById('storyModal').style.display = 'none';
});

document.getElementById('storyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real app, this would save story data via API
    alert('Story section updated successfully!');
    document.getElementById('storyModal').style.display = 'none';
});

// Form Submissions
document.getElementById('weddingInfoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Wedding information updated successfully!');
});

document.getElementById('groomInfoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Groom information updated successfully!');
});

document.getElementById('brideInfoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Bride information updated successfully!');
});

document.getElementById('settingsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Account settings updated successfully!');
});

// Add Photo functionality
document.getElementById('addPhotoBtn').addEventListener('click', function() {
    // In a real app, this would open a file picker
    alert('Photo upload functionality would open here.');
});